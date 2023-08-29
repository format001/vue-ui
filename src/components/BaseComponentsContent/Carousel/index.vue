<template>
    <div class="carousel-wrapper">
        <carousel-ui
            :autoplay="true"
            :duration="3000"
            :initial="0"
            :has-dot="true"
            :has-director="true"
        >
            <car-item
                v-for="(item, index) of carData"
                :key="index"
            >
                <img :src="getSrc(item.name)" alt="">
            </car-item>
        </carousel-ui>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    data () {
        return {
            carData: [
                {
                    name: '1.jpg'
                },
                {
                    name: '2.jpg'
                },
                {
                    name: '3.jpg'
                },
                {
                    name: '4.jpg'
                },
                {
                    name: '6.jpg'
                }
            ]
        }
    },
    methods:{
         getSrc (name) {
            return  new URL(`/src/assets/images/${ name }`, import.meta.url).href
        }
    }
}
</script>

<style scoped lang="scss">
.carousel-wrapper{
    width: 600px;
    height: 300px;
    font-size: .14rem;

    img{
        width: 100%;
    }
}
</style>