import { defineAsyncComponent } from 'vue';

export const Intro = defineAsyncComponent(() => import(/* webpackChunkName: "Intro" */ './Intro.vue'));
export const List = defineAsyncComponent(() => import(/* webpackChunkName: "List" */ './List.vue'));
export const Article = defineAsyncComponent(() => import(/* webpackChunkName: "Article" */ './Article.vue'));