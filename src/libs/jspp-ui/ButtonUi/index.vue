<template>
    <!--:disabled是用来接收父级的值的，用来做点击事件处理的。起css样式的是class里的disabled-->
    <button :type="type"
            class="sweet-button"
            :class="[
            `sweet-button--${type}`,
            `sweet-button--${size}`,
            {
              'is-disabled': disabled,
              'is-round': round,
              'is-circle': circle
            }
          ]"
            :disabled="disabled">
        <!--使用默认插槽来填充文本-->
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ButtonUi",
    inject: {},
    props: {
        type: {
            type: String,
            default: 'default',
            validator (value) {
                return [
                    'default',
                    'primary',
                    'danger',
                    'success',
                    'warning',
                    'secondary',
                    'info'
                ].includes(value)
            }
        },
        size:{
            size: String,
            default: 'default',
            validator (value) {
                return [
                    'default',
                    'medium',
                    'small',
                    'mini'
                ].includes(value)
            }
        },
        disabled: Boolean,
        round: Boolean,
        circle: Boolean
    },
}
</script>

<style scoped lang="scss">
.sweet-button {
    padding: 8px 15px;
    border: none;
    color: white;
    font-size: 14px;
    border-radius: 6px;
    outline: none;
    transition: .1s;
    margin-left: 10px;
    cursor: pointer;
}

.sweet-button--default {
    color: #606266;
    background-color: white;
    border: 1px solid #dcdfe6;
}

.sweet-button--default:hover,{
    color: #0D6EFD;
    background-color: #ecf5ff;
    border: 1px solid #c9e3ff;
}

.sweet-button--default.is-disabled {
    color: #c0c4cc;
    background-color: #fff;
    border-color: #ebeef5;
    cursor: not-allowed;
}

.sweet-button--medium{
    font-size: 14px;
    padding: 6px 15px;
}

.sweet-button--small{
    font-size: 12px;
    padding: 6px 15px;
}

.sweet-button--mini{
    font-size: 12px;
    padding: 4px 13px;
}

.sweet-button--primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

.sweet-button--primary:hover,
.sweet-button--primary:focus {
    color: white;
    background-color: rgba(32, 160, 255, 0.7);
}

.sweet-button--primary.is-disabled {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
    cursor: not-allowed;
}

.sweet-button--success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}

.sweet-button--success:hover, {
    color: #fff;
    background-color: rgba(103, 194, 54, 0.7);
}

.sweet-button--success.is-disabled {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
    cursor: not-allowed;
}

.sweet-button--secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
}

.sweet-button--secondary:hover, .sweet-button--secondary:focus{
    color: white;
    background-color: rgba(144, 147, 153, 0.7);
}

.sweet-button--secondary.is-disabled {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
    cursor: not-allowed;
}

.sweet-button--info {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
}

.sweet-button--info:hover, .sweet-button--info:focus{
    color: white;
    background-color: rgb(94, 223, 246, .7);
}

.sweet-button--info.is-disabled {
    color: #fff;
    background-color: #9EEAF9;
    border-color: #9EEAF9;
    cursor: not-allowed;
}

.sweet-button--warning {
    color: #fff;
    background-color: #ffc107;
    border-color: #ffc720;
}

.sweet-button--warning:hover, .sweet-button--warning:focus{
    color: white;
    background-color: rgba(230, 162, 60, 0.7);
}

.sweet-button--warning.is-disabled {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
    cursor: not-allowed;
}

.sweet-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
}

.sweet-button--danger:hover {
    color: white;
    background-color: rgba(245, 108, 108, 0.7);
}

.sweet-button--danger.is-disabled {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
    cursor: not-allowed;
}

.is-round{
    border-radius: 29px;
}
.is-circle{
    border-radius: 50%;
}

.ra-button [class*=ra-icon-]+span{
    margin-left: 5px;
}
</style>