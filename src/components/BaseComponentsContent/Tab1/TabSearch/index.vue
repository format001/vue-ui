<template>
  <div class="tab-search">
    <input
      type="text"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: 'tab-search',
  props: ['searchValue'],
  data () {
    return {
      value: this.searchValue
    }
  },
  watch: {
    value () {
      this.$emit('update:searchValue', this.value);
    }
  }
}
</script>

<style lang="scss">
  .tab-search {
    height: 50px;
    padding: 6px 10px;
    box-sizing: border-box;

    input {
      width: 100%;
      height: 38px;
      box-sizing: border-box;
        outline:none;
        border: none;
    }
  }
</style>
