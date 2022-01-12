import { createRouter, createWebHistory } from 'vue-router';
// import { createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from "@/views/Register";
import UserDashboard from "@/views/User/Dashboard.vue";
import AdminConsole from "@/views/Admin/Console.vue";
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
        path: '/admin/console',
        name: 'Admin Console',
        component: AdminConsole,
        meta: { requiresAuth: true }
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
    console.log("account type: ", localStorage.getItem("accountType"));
    const isAdmin = localStorage.getItem("accountType") === "5";

    if(to.matched.some(record => record.meta.requiresAuth) && !loggedIn){
        next('/');
    }

    if(to.matched.some(record => record.meta.requiresAdminAuth) && !isAdmin){
        next('/');
    }
    next();
});

export default router;