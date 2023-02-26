<template>
    <div class="comment-wrapper">
        <h1 class="username">userName: {{ $store.state.userInfo.username }}</h1>
        <my-button
            class="btn"
            :type="$store.state.userInfo.id === 1 ? 'primary' : ''"
            @click="setUserInfo({ id: 1, username: '张三' })"
        >张三</my-button>
        <my-button
            class="btn"
            :type="$store.state.userInfo.id === 2 ? 'primary' : ''"
            @click="setUserInfo({ id: 2, username: '李四' })"
        >李四</my-button>
        <my-button
            class="btn"
            :type="$store.state.userInfo.id === 3 ? 'primary' : ''"
            @click="setUserInfo({ id: 3, username: '王五' })"
        >王五</my-button>
        <hr>
        <comment-one></comment-one>
<!--        <comment-two></comment-two>-->
    </div>
</template>

<script setup>
import {useStore} from 'vuex'
import CommentOne from './CommentOne';
import CommentTwo from './CommentTwo';

const store = useStore();

const setUserInfo = (payload) => {
    store.commit('setUserInfo', payload)
}
</script>

<style lang="scss" scoped>
.comment-wrapper{
    font-size: 20px;
    height: 600px;
    .username {
        padding: 10px 0;
        font-size: 26px;
        color: #424242;
    }

    .btn{
        margin: 0 6px;
    }
}

</style>