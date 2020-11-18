import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Root from "../components/Root.vue"
import Home from "../components/Home.vue"
import Cart from "../components/Cart.vue"
import Discover from "../components/Discover.vue"
import Sort from "../components/Sort.vue"
import Me from "../components/Me.vue"
import Search from "../components/Search.vue"
import Register from "../components/Register.vue"
import Cartdetail from "../components/Cartdetail.vue"
import Reg from "../components/Reg.vue"
const routes = [
    {
        path: "/",
        component: Root,
        redirect: '/home/01',
        children: [
            { path: '/home/:id', component: Home },
            { path: '/sort/:id', component: Sort},
            { path: '/discover/:id', component: Discover },
            { path: '/cart/:id', component: Cart },
            { path: '/me/:id', component: Me },
            { path: 'Reg', component: Reg },
        ]
    },
    {
        path: "/search",
        component: Search
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/detail",
        component: Cartdetail
    }
]

const router = new VueRouter({
    routes
})

export default router
