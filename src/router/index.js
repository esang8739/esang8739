import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)



const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            redirect: '/Index',
            children: [{
                path: '/Index',
                component: Index
            }]
        },

    ]
})
export default router