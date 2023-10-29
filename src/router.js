import { createRouter, createWebHistory } from 'vue-router';
import { store } from './store';

import HomeComponent from './components/HomeComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';
import LandingComponent from './components/LandingComponent.vue';

const routes = [
    {
        path: '/',
        component: LandingComponent,
    },
    {
        path: '/home',
        component: HomeComponent,
        // Move the beforeEach guard here
        beforeEnter: (to, from, next) => {
            if (!store.isLoggedIn) {
                next('/');
            } else {
                next();
            }
        },
    },
    {
        path: '/about-me',
        component: AboutMeComponent,
        // Move the beforeEach guard here
        beforeEnter: (to, from, next) => {
            if (!store.isLoggedIn) {
                next('/');
            } else {
                next();
            }
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
