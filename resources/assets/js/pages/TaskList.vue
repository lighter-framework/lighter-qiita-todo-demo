<template>
    <div>
        <h1 class="display-3">TaskList</h1>
        <v-list>
            <template v-for="task in tasks">
                <v-list-tile>
                    <v-list-tile-action>
                        <v-checkbox v-model="task.is_finished" @input="save(task)"></v-checkbox>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        {{task.name}}
                    </v-list-tile-title>
                    <v-list-tile-action>
                        <v-btn color="success" @click="openEditDialog(task)">Edit</v-btn>
                    </v-list-tile-action>
                </v-list-tile>
                <v-divider></v-divider>
            </template>
            
        </v-list>

        <v-dialog v-model="editDialog" max-width="500">
            <v-card>
                <v-card-title><h1>Edit</h1></v-card-title>
                <v-card-text>
                    <v-text-field label="Name" v-model="editName" :error-messages="editNameErrors"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn flat @click="editDialog = false">Close</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="applyEdit">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Tasks from '../sparks/Tasks'

export default {
    name: 'TaskList',
    data () {
        return {
            tasks: [],
            editDialog: false,
            editTask: null,
            editName: '',
            editNameErrors: [],
        }
    },
    async mounted () {
        this.tasks = await Tasks.all()
    },
    methods: {
        save (task) {
            task.save()
        },
        openEditDialog (task) {
            this.editTask = task
            this.editName = task.name
            this.editNameErrors = []
            this.editDialog = true
        },
        applyEdit () {
            this.editTask.name = this.editName
            this.editTask.save()
            this.editDialog = false
        }
    },
}
</script>

<style>

</style>
