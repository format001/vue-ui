
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
    },
    { path: '/component', redirect: '/component/transfer'  },
    {
        path: '/component/:id',
        name: 'Component',
        component: () => import(
            '../page/Component.vue'
            ),
    },
    { path: '/:pathMatch(.*)*', redirect: '/'  },
    // {
    //     path: '/user/:id',
    //     name: 'User',
    //     component: () => import(
    //         '../page/User.vue'
    //         ),
    //     children: [
    //         {
    //             // 当 /user/:id/profile 匹配成功
    //             // UserProfile 将被渲染到 User 的 <router-view> 内部
    //             path: 'profile',
    //             component: () => import(
    //                 '../page/Profile.vue'
    //                 ),
    //         },
    //         {
    //             // 当 /user/:id/posts 匹配成功
    //             // UserPosts 将被渲染到 User 的 <router-view> 内部
    //             path: 'posts',
    //             component: () => import(
    //                 '../page/Posts.vue'
    //                 ),
    //         },
    //         // { path: '',
    //         //     component: () => import(
    //         //         '../page/UserHome.vue'
    //         //         ),
    //         // },
    //     ],
    // },

    // {
    //     path: '/selector',
    //     name: 'Selector',
    //     component: () => import(
    //         '../page/Selector.vue'
    //         ),
    // }
];

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),

    routes,
});

router.beforeEach((to, from, next) => {

    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    // 返回 false 以取消导航
   next();
})

export default router;