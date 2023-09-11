<template>
    <div class="tab-nav">
        <nav-item
            v-for="(item, index) of navData"
            :key="item.id"
            :nav-item="item"
            :my-index="index"
            :current-index="tabIndex"
            :nav-len="navData.length"
            @change-index="changeIndex"
        ></nav-item>
    </div>
</template>

<script>

import NavItem from './NavItem.vue';

export default {
    name: 'tab-nav',
    components: {
        NavItem
    },
    props: ['navData', 'tabIndex'],
    methods: {
        changeIndex(index) {
            this.$emit('changeIndex', index);
        }
    }
}
</script>

<style>
.tab-nav {
    height: 50px;
    box-sizing: border-box;
    border-bottom: 1px solid darkorange;
    border-top: 1px solid darkorange;
}
</style>
