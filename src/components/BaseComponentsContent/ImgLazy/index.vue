<template>
    <div class="img-lazy-container">
        <div
            v-for="(item, key) of imgData"
            :key="key"
            class="img-wrap"
        >
            <img v-lazies="getSrc(item.img)" alt="">
        </div>
    </div>
</template>

<script>
import Service from '@/services/require.js'
export default {
    name: "ImgLazy",
    data () {
        return{
            imgData: []
        }
    },
    mounted () {
        this.getImgData()
    },
    computed: {

    },
    methods: {
        getSrc (name) {
            return  new URL(`/src/assets/images/${name}`, import.meta.url).href
        },

        async getImgData(){
            this.imgData = await Service.getImgLazyList();
        }
    }

}
</script>

<style scoped lang="scss">
.img-lazy-container{
    .img-wrap{
        width: 200px;
        padding: 20px 0;

        img{
            width: 100%;
        }
    }
}
</style>