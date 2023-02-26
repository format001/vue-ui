<template>
    <div class="qrcode-login">
        <img src="../../../public/vite.svg"/>
    </div>
</template>

<script>
import {onMounted} from 'vue'

export default {
    name: 'QrcodeLogin',
    setup(){
        onMounted(() => {
                console.log('onMounted')
        })

    }
}
</script>

<style lang="scss">
.qrcode-login {
    padding: 30px;
    box-sizing: border-box;
    height: 220px;

    img {
        height: 100%;
        margin: 0 140px;
    }
}
</style>