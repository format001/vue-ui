<template>
    <input
        type="text"
        value="0"
        @input="setNumber"
    />
</template>

<script>
export default {
    name: "CalInput",
    props: {
        field: String
    },
    emits: ['dispatch'],
    methods: {
        setNumber(e) {
            const value = Number(e.target.value);
            this.$emit('dispatch', 'SET_NUMBER', this.field, value)
        }
    }
}
</script>

<style scoped>

</style>