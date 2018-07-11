<template>
    <div>
        <h1 class="display-3">CreateTask</h1>
        <v-card>
            <v-card-text>
                <v-text-field label="Name" v-model="name" :error-messages="nameErrors"></v-text-field>
                <v-btn color="primary" @click="create">Create</v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import Tasks from '@/sparks/Tasks'

export default {
    name: 'TaskList',
    data () {
        return {
            name: '',
            nameErrors: []
        }
    },
    methods: {
        async create () {
            this.nameErrors = []

            if (this.name.length === 0) {
                this.nameErrors = ['Name is required!']
                return
            }

            await Tasks.create(this.name)

            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>
