<template>
    <div>{{ $attrs }}</div>
</template>

<script setup>

        import {getCurrentInstance,
            useAttrs
        } from "vue";

        defineProps({
            data: {
                type: Object
            }
        });


        const attrs = useAttrs()
        console.log(attrs)
</script>



<style scoped>

</style>