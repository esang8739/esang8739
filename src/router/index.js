import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import demoVant from '../views/demoVant.vue'
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
        }, {
            path: '/demoVant',
            component: demoVant
        }

    ]
})
export default router