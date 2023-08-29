<template>
    <div class="calculation">
        <cal-result :result="result"></cal-result>
        <div class="input-wrapper">
            <cal-input
                field="firstNumber"
                @dispatch="dispatch"
            ></cal-input>
            <cal-input
                field="secondNumber"
                @dispatch="dispatch"
            ></cal-input>
        </div>
        <div class="button-wrapper">
            <cal-button
                inner-text="+"
                method="plus"
                :cur-method="curMethod"
                @dispatch="dispatch"
            ></cal-button>
            <cal-button
                inner-text="-"
                method="minus"
                :cur-method="curMethod"
                @dispatch="dispatch"
            ></cal-button>
            <cal-button
                inner-text="*"
                method="div"
                :cur-method="curMethod"
                @dispatch="dispatch"
            ></cal-button>
            <cal-button
                inner-text="/"
                method="mul"
                :cur-method="curMethod"
                @dispatch="dispatch"
            ></cal-button>
        </div>
    </div>
</template>

<script>
import CalResult from 'components/BaseComponentsContent/Calculator/CalResult.vue'
import CalInput from 'components/BaseComponentsContent/Calculator/CalInput.vue'
import CalButton from 'components/BaseComponentsContent/Calculator/CalButton.vue'

/*
* 派发器
* type -> 事件 -> 逻辑 -> type -> 派发器 -> 数据更改
*
* */
import dispatch from './dispacher/dispachers.js'
export default {
    name: "Calculator",
    components: {CalButton, CalInput, CalResult},
    data() {
        return {
            result: 0,
            firstNumber: 0,
            secondNumber: 0,
            curMethod: 'plus'
        }
    },
    methods: {
        dispatch(...args) {
            dispatch(this)(...args);
        }
    }
}
</script>

<style scoped lang="scss">
.calculation{
    font-size: 30px;
}
</style>