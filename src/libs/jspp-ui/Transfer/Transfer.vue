<template>
    <div class="transfer-wrapper">
        <div class="selector">
            <selector
                :data="options"
                @select-change="setTargetIndex"
            ></selector>
        </div>
        <div class="transfer">
            <div
                class="box left-list"
                @dragover.prevent
                @drop="removeRightListData([ dragedItem ])"
            >
                <list-title
                    :title="leftTitle"
                ></list-title>
                <div>
                    <list-item
                        :data="leftListData"
                        left-or-right="left"
                        @checkbox-click="setCheckedData"
                        @drag-item="setDragedItem"
                    ></list-item>
                </div>
            </div>
            <button-group
                :left-button-disabled="transferButtonDisabled.left"
                :right-button-disabled="transferButtonDisabled.right"
                @left-button-click="removeRightListData(checkedData.right)"
                @right-button-click="addRightListData(checkedData.left)"
            ></button-group>
            <div
                class="box right-list"
                @dragover.prevent
                @drop="addRightListData([ dragedItem ])"
            >
                <list-title
                    :title="rightTitle"
                ></list-title>
                <div>
                    <list-item
                        :data="rightListData"
                        left-or-right="right"
                        @checkbox-click="setCheckedData"
                        @drag-item="setDragedItem"
                    ></list-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Selector from './components/Selector.vue';
import ListTitle from './components/ListTitle.vue';
import ButtonGroup from './components/ButtonGroup.vue';
import ListItem from './components/ListItem.vue';

import propsDefinition from './extends/props.js';

import {
    useTargetIndex,
    useComputedData,
    useRightListData,
    useCheckedData,
    useDragedItem
} from './extends/hooks';

const props = defineProps(propsDefinition);
const options = props.data.map(({ title }) => title);

const [
    targetIndex,
    setTargetIndex
] = useTargetIndex(0);

const [
    checkedData,
    setCheckedData,
] = useCheckedData();

const [
    rightListData,
    addRightListData,
    removeRightListData
] = useRightListData([], checkedData);

const {
    leftTitle,
    leftListData,
    transferButtonDisabled
} = useComputedData(props.data, targetIndex, rightListData, checkedData);

const [
    dragedItem,
    setDragedItem
] = useDragedItem();

</script>

<style lang="scss" scoped>
.transfer-wrapper{
    width: 1200px;
    margin: 30px auto;
    font-size: 12px;

    .selector{
        margin-left: 190px;
    }
}
.transfer {
    display: flex;
    flex-direction: row;
    width: 450px;
    height: 300px;
    //border: 1px solid #ddd;

    .box {
        width: 150px;
        height: 100%;
    }
    .left-list,
    .right-list{
        border: 1px solid darkcyan;
        border-radius: 10px;
        overflow: hidden;
    }
}


</style>