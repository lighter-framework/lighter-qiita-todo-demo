import Vue from 'vue'

import '../../../node_modules/material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vuetify from 'vuetify'
import '../../../node_modules/vuetify/dist/vuetify.min.css'

import router from './router'
import store from './store'
import Lighter from './lighter'

import Tasks from './sparks/Tasks'
window.Tasks = Tasks

import '../sass/app.scss'

Vue.use(Vuetify)

Vue.component('app', require('@/layouts/App'))

const app = new Vue({
    router,
    store,
}).$mount('#app')