<template>
    <div class="calculation">
        <cal-result :result="result"></cal-result>
        <div class="input-wrapper">
<!--            <cal-input-->
<!--               field="firstNumber"-->
<!--               @set-number="setNumber"-->
<!--            ></cal-input>-->
<!--            <cal-input-->
<!--                field="secondNumber"-->
<!--                @set-number="setNumber"-->
<!--            ></cal-input>-->
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
<!--            <cal-button-->
<!--                inner-text="+"-->
<!--                method="plus"-->
<!--                :cur-method="curMethod"-->
<!--                @change-method="changeMethod"-->
<!--            ></cal-button>-->
<!--            <cal-button-->
<!--                inner-text="-"-->
<!--                method="minus"-->
<!--                :cur-method="curMethod"-->
<!--                @change-method="changeMethod"-->
<!--            ></cal-button>-->
<!--            <cal-button-->
<!--                inner-text="*"-->
<!--                method="div"-->
<!--                :cur-method="curMethod"-->
<!--                @change-method="changeMethod"-->
<!--            ></cal-button>-->
<!--            <cal-button-->
<!--                inner-text="/"-->
<!--                method="mul"-->
<!--                :cur-method="curMethod"-->
<!--                @change-method="changeMethod"-->
<!--            ></cal-button>-->
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
import CalResult from 'components/Calculator/CalResult.vue'
import CalInput from 'components/Calculator/CalInput.vue'
import CalButton from 'components/Calculator/CalButton.vue'

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
        // setNumber( field, value) {
        //     this[field] = value;
        //     this.setResult()
        // },
        // changeMethod(method){
        //     this.curMethod = method;
        //     this.setResult()
        // },
        // setResult() {
        //     this.result = this.compute(
        //         this.curMethod,
        //         this.firstNumber,
        //         this.secondNumber
        //     )
        // },
        // compute (method, fNumber, sNumber) {
        //     switch (method) {
        //         case 'plus':
        //             return fNumber + sNumber;
        //         case 'minus':
        //             return fNumber - sNumber;
        //         case 'div':
        //             return fNumber / sNumber;
        //         case 'mul':
        //             return fNumber * sNumber;
        //         default:
        //             break;
        //     }
        // }
    }
}
</script>

<style scoped lang="scss">
.calculation{
    font-size: 30px;
}
</style>