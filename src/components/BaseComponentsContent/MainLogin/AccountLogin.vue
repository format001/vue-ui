<template>
    <div class="account-login">
        <div class="input-box">
            <input type="text" v-model="state.username" placeholder="Username"/>
        </div>
        <div class="input-box">
            <input type="password" v-model="state.password" placeholder="Password"/>
        </div>
        <div class="input-box">
            <button class="btn">Login</button>
        </div>
    </div>
</template>

<script setup>
import {
    reactive,
} from "vue";

    let state = reactive({
        username: 'messi',
        password: '123'
    })
</script>

<style lang="scss">
.account-login {
    padding: 30px;
    box-sizing: border-box;

    .input-box {
        height: 34px;
        margin-top: 20px;

        input,
        button {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border: 1px solid #333;
        }

        .btn {
            border: none;

        }
    }
}
</style>
