<template>
    <tr v-for="(dateRow, rowIndex) in calendarDate.calendarTd" :key="rowIndex">
        <template
            v-for="(item, dateIndex) in dateRow"
        >
            <td
                v-if="isObject(item)"
                :key="item.timestamp"
                class="calendar-cell"
                :class="setClass(item.timestamp)"
                @click="onClickTdDate(item.timestamp)"
                @mouseover="onHoverDate(item.timestamp)"
            >
                <div class="calendar-cell-content">
                    {{ item.day }}
                </div>
            </td>

            <td
                v-else
                class="calendar-cell"
                :key="item"
                :class="{
                        off: true
                    }"
            >
                <div class="calendar-cell-content">
                    {{ item }}
                </div>
            </td>
        </template>
    </tr>
</template>

<script setup>
    import { isObject } from './utils/tools.js'

    const props = defineProps({
        calendarDate: {
            type: Object,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        hoverStart: {
            type: Number,
            required: true
        },
        hoverEnd: {
            type: Number,
            required: true
        },
        midnightTimestamp: {
            type: Number,
            required: true
        },
    })

    const emit = defineEmits([
        'onClickTdDate',
        'onHoverDate'
    ])

    const onClickTdDate = (timestamp) => {
        emit('onClickTdDate', timestamp)
    }

    const onHoverDate = (timestamp) => {
        emit('onHoverDate', timestamp)
    }

    const setClass = (timestamp) => {
        return {
            'today': props.midnightTimestamp === timestamp,
            'active': (props.startDate.getTime() === timestamp || props.endDate.getTime() === timestamp),
            'in-range': (timestamp >= props.startDate.getTime() && timestamp <= props.endDate.getTime()) ||
                (timestamp >= props.hoverStart && timestamp <= props.hoverEnd),
            'start-date': props.startDate.getTime()=== timestamp,
            'end-date': props.endDate.getTime() === timestamp,
        }
    }
</script>

<style lang="scss">
$cellSize: 34px;

.calendar-cell {
    width: 34px;
    height: 34px;
    line-height: 34px;

    &:hover {
        background-color: #eee;
        color: inherit;
    }
    &.today {
        font-weight: bold;
    }

    &.in-range {
        background-color: #eef4ff;
        color: #424242;
    }

    &.active,
    &.active:hover {
        border-color: transparent;
        color: #fff;

        &.start-date {
            border-top-left-radius: $cellSize;
            border-bottom-left-radius: $cellSize;

        }

        &.end-date {
            border-top-right-radius: $cellSize;
            border-bottom-right-radius: $cellSize;

        }

        .calendar-cell-content {
            border-radius: 50%;
            background-color: #4285f4;
        }
    }

    &.off {
        background-color: #fff;
        border-color: transparent;
        color: #999;
    }
}
</style>