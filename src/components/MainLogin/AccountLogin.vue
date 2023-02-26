<template>
    <div class="account-login">
        <div class="input-box">
            <input type="text" v-model="username" placeholder="Username"/>
        </div>
        <div class="input-box">
            <input type="password" v-model="password" placeholder="Password"/>
        </div>
        <div class="input-box">
            <button class="btn">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccountLogin',
    data () {
        return {
            username: '',
            password: ''
        }
    }
}
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