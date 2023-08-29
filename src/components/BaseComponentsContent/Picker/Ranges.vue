<template>
    <div class="ranges">
        <ul class="presets-wrapper">
            <li
                v-for="(item, index) in presets"
                :key="index"
                class="presets-item"
                @click="clickPreset(item.range)"
                :class="{'active': isAction(item.range)}"
            >
                {{ item.label }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps({
        presets: {
            type: Array
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        }
    });

    const emit = defineEmits(['clickPreset']);

    const isAction = ({startDate, endDate}) => {
        if (props.startDate.getTime() === startDate && props.endDate.getTime() === endDate) {
            return true
        }
    }

    const clickPreset = (payload) => {
       emit('clickPreset', payload)
    }
</script>

<style lang="scss" scoped>
$activeRangeBgColor: #4285f4;

.ranges {
    float: left;
    width: 120px;
    font-size: 12px;
    box-sizing: border-box;

    .presets-wrapper {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    .presets-item {
        padding: 8px 12px;
        box-sizing: border-box;
        font-size: 12px;
        cursor: pointer;

        &:hover {
            background-color: #eee;
        }

        &.active {
            color: $activeRangeBgColor;

        }
    }
}
</style>

