<template>
    <v-app>
        <v-toolbar color="blue" dark>
            <v-toolbar-title>
                Lighter TODO
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "app",
    }
</script>

<style scoped>
</style>