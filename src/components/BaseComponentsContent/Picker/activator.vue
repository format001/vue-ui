<template>
    <div class="activator"
        @click="$emit('set-visible', !visible)"
    >
        <input v-bind="$attrs" class="text-field"  type="text" :value="title">
        <span class="bar"></span>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String
        },
        visible: {
            type: Boolean
        }
    })
</script>


<style lang="scss" scoped>
$labelColor:  #4285f4;
$barColor:  #4285f4;
.activator{
    width: 100%;
    height: 100%;

    .text-field {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        box-sizing: border-box;
        font-size: 18px;
        border: none;
        border-bottom: 1px solid #757575;

        &:focus { outline: none; }
    }

    .bar 	{
        position: relative;
        display: block;
        width: 100%;

        &:before,
        &:after {
            content: '';
            height: 2px;
            width: 0;
            bottom: 1px;
            position: absolute;
            background: $barColor;
            transition: 0.2s ease all;
        }

        &:before { left: 50%; }
        &:after { right: 50%; }
    }

    /* active state */
    .text-field:focus ~ .bar:before,
    .text-field:focus ~ .bar:after {
        width: 50%;
    }
}

</style>
