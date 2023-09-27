
import {createRouter,
    createWebHistory,
    createWebHashHistory} from "vue-router";

import Index from '../page/Index.vue'

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import(
            '../page/Home.vue'
            ),
        children: [
            {
                // 当 /user/:id/profile 匹配成功
                // UserProfile 将被渲染到 User 的 <router-view> 内部
                path: 'profile',
                alias: 'list',
                component: () => import(
                    '../page/Profile.vue'
                    ),
            }
        ]
    },
    { path: '/component', redirect: '/component/transfer'  },
    {
        path: '/component/:id',
        name: 'Component',
        component: () => import(
            '../page/Component.vue'
            ),
    },
    // { path: '/:pathMatch(.*)*', redirect: '/'  },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import(
            '../page/Profile.vue'),
        // children: []
    },
    {
        path: '/users/:username*',
        name: 'User',
        props: true,
        component: () => import('../page/User.vue'),
        children: [
            {
                // 当 /user/:id/profile 匹配成功
                // UserProfile 将被渲染到 User 的 <router-view> 内部
                path: 'profile',
                alias: 'list',
                component: () => import(
                    '../page/Profile.vue'
                    ),
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 将被渲染到 User 的 <router-view> 内部
                path: 'posts',
                component: () => import(
                    '../page/Posts.vue'
                    ),
            },
            {
                path: 'UserEmpty',
                name: 'UserEmpty',
                component: () => import(
                    '../page/UserHome.vue'
                    ),
            },
        ],
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    next()
});


export default router;
