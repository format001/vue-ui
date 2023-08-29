<template>
    <div class="box">
<!--        <div>1</div><div>1</div><div>1</div><div>1</div> <div>1</div><div>1</div><div>1</div><div>1</div> <div>1</div><div>1</div><div>1</div><div>1</div> <div>1</div><div>1</div><div>1</div><div>1</div> <div>1</div><div>1</div><div>1</div><div>1</div>-->
        <div class="t"></div>
        <div ref="step1" class="step-0">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.</div>
        <div ref='step2'  class="step-1">A DOM element on your page. The second step will pop on this element because its ID is 'v-step-1'.</div>
        <div>1</div><div>1</div><div>1</div><div>1</div> <div>1</div><div>1</div><div>1</div><div>1</div> <div>1</div><div>1</div><div>1</div><div>1</div> <div>1</div><div>1</div><div>1</div><div>1</div> <div>1</div><div>1</div><div>1</div><div>1</div>
        <div ref="step3" class="step-2">A DOM element on your page. The third and final step will pop on this element because its ID is 'v-step-2'.</div>
        <div>1</div><div>1</div><div>1</div><div>1</div> <div>1</div><div>1</div><div>1</div><div>1</div> <div>1</div><div>1</div><div>1</div><div>1</div> <div>1</div><div>1</div><div>1</div><div>1</div> <div>1</div><div>1</div><div>1</div><div>1</div>
    </div>
</template>

<script setup>
import guideBox from './index.js'

import {reactive, ref, h} from 'vue'

    const step1 = ref();
    const step2 = ref();
    const step3 = ref();

    const steps = reactive([
        {
            target: step1,
            insert: h('div', {}, 'stepZero')
        }, {
            target: step2,
            insert: h('div', {}, 'stepOne')
        }, {
            target: step3,
            insert: h('div', {}, 'stepTwo')
        }
    ])

    guideBox({
        steps,
        handleGuide (type) {

        },
    })

</script>

<style lang="scss" >
.box {
    font-size: .04rem;

    .t{
        height: 335px;
        width: 20px;
        background-color: #FBA806;
    }
}
</style>