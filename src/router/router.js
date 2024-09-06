import {createRouter, createWebHistory} from "vue-router";
import Register from "@/views/auth/Register.vue";
import Login from "@/views/auth/Login.vue";
import Error404 from "@/views/error404.vue";
import MainPage from "@/views/MainPage.vue";
import MoviePage from "@/components/MoviePage.vue";
import SerialPage from "@/components/series/SerialPage.vue";


const routes = [
    {
        path:"/register",
        component:Register
    },
    {
        path:"/login",
        component: Login
    },
    {
        path: "/home",
        component: MainPage
    },
    {
        path: "/movie/:id",
        component: MoviePage
    },
    {
        path: "/tv/:id",
        component: SerialPage
    },
    {
        path:'/:pathMatch(.*)*',
        component: Error404
    },



]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router