import { createRouter, createWebHistory } from 'vue-router';
// import { createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from "@/views/Register";
import UserDashboard from "@/views/User/Dashboard.vue";
import AdminPanel from "@/views/AdminPanel.vue";
import NotFound from "@/views/NotFound.vue";
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
        component: UserDashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/panel',
        name: 'Admin Panel',
        component: AdminPanel
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem("user");

    if(to.matched.some(record => record.meta.requiresAuth) && !loggedIn){
        next('/');
    }
    next();
});

export default router;