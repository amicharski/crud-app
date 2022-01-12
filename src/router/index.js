import { createRouter, createWebHistory } from 'vue-router';
// import { createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from "@/views/Register";
import UserDashboard from "@/views/UserDashboard.vue";
import AdminPanel from "@/views/AdminPanel.vue";

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
        path: '/admin/panel',
        name: 'Admin Panel',
        component: AdminPanel
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;