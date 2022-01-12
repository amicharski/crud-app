import { createRouter, createWebHistory } from 'vue-router';
// import { createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from "@/views/Register";
import UserDashboard from "@/views/UserDashboard.vue";
import Suspended from "@/views/Suspended.vue";
import AdminPanel from "@/views/AdminPanel.vue";
import UserLogout from "@/views/UserLogout";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/user/dashboard',
        name: 'User Dashboard',
        component: UserDashboard
    },
    {
        path: '/suspended',
        name: 'Suspended',
        component: Suspended
    },
    {
        path: '/admin/panel',
        name: 'Admin Panel',
        component: AdminPanel
    },
    {
        path: '/user/logout',
        name: 'UserLogout',
        component: UserLogout
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;