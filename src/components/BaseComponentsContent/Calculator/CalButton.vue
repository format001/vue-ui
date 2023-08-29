<template>
    <button
        :method="method"
        class="btn"
        :class="{ current: method === curMethod}"
        @click="changeMethod"
    >
    {{ innerText}}
    </button>
</template>

<script>
export default {
    name: "CalButton",
    props: {
        innerText: String,
        method: String,
        curMethod: String
    },
    emits: ['dispatch'],
    methods: {
        changeMethod() {
            this.$emit('dispatch', 'CHANGE_METHOD', this.method);
        }
    }
}
</script>

<style scoped lang="scss">
.btn{
    margin: 0 10px;
    width: 40px;
    height: 40px;

    &.current{
        background-color: #42b983;
        color: #fff;

    }
}

</style>