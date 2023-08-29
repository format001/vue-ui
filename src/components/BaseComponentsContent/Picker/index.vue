<template>
    <div class="picker-root">
        <default-activator
            :title="`${startText}  ${endText}`"
            :visible="visible"
            @set-visible="setVisible"
            readonly >
        </default-activator>
        <transition name="slide-fade" mode="out-in">
            <div
                v-if="visible"
                v-click-outside="onClickOutside"
                class="picker-panel"
            >
                <calendar-ranges
                    :presets="defaultPresets"
                    :start-date="startDate"
                    :end-date="endDate"
                    @click-preset="clickPreset"
                ></calendar-ranges>
                <calendar-table
                    :calendar-date="leftCalendarDate"
                    :start-date="startDate"
                    :end-date="endDate"
                    :midnight-timestamp="midnightTimestamp"
                    :range-of-year="RangeOfYear"
                    :hover-start="hoverStartTimestamp"
                    :hover-end="hoverEndTimestamp"
                    @on-change-calendar-year="onChangeCalendarYear"
                    @on-change-calendar-month="onChangeCalendarMonth"
                    @on-click-td-date="onClickTdDate"
                    @on-hover-date="onHoverDate"
                ></calendar-table>
            </div>
        </transition>
    </div>
</template>

<script setup>
import {watch} from 'vue'

import vClickOutside from './directives'
import CalendarTable from './CalendarTable.vue'
import CalendarRanges from './Ranges.vue';
import DefaultActivator from './activator.vue';
import { defaultPresets } from './config';
import {
    CHANGE_MONTH,
    CHANGE_YEAR,
    CLICK_TD,
    CLICK_PRESET,
    HOVER_DATE,
    IS_VISIBLE,
    CLICK_OUTSIDE,
} from './store/actionType'
import todoReducer from './store/reducer';

    const props = defineProps({
        start: {
            type: [String, Date],
            default () {
                return new Date();
            }
        },
        end: {
            type: [String, Date],
            default () {
                return new Date();
            }
        },
    })

    const {
        startDate,
        endDate,
        leftCalendarDate,
        startText,
        endText,
        midnightTimestamp,
        RangeOfYear,
        hoverStartTimestamp,
        hoverEndTimestamp,
        visible,
        dispatch
    } = todoReducer(props);

    const onChangeCalendarMonth = dispatch(CHANGE_MONTH);
    const onChangeCalendarYear = dispatch(CHANGE_YEAR);
    const onClickTdDate = dispatch(CLICK_TD);
    const clickPreset = dispatch(CLICK_PRESET);
    const setVisible = dispatch(IS_VISIBLE);
    const onHoverDate = dispatch(HOVER_DATE);
    const onClickOutside = dispatch(CLICK_OUTSIDE);

    const $emit = defineEmits([ 'update:start', 'update:end' ])

    watch([ startText, endText ], ([ newStart, newEnd ]) => {
        $emit('update:start', newStart);
        $emit('update:end', newEnd)
    });

</script>

<style lang="scss" scoped>
.picker-root {
    position: relative;
    width: 240px;
    height: 40px;

    .picker-panel {
        z-index: 1;
        position: absolute;
        width: 370px;
        margin-top: 8px;
        padding: 6px 0;
        border: 1px solid #ddd;
        font-size: 15px;
        border-radius: 6px;
        background-color: #fff;

        &::before,
        &::after {
            position: absolute;
            display: inline-block;
            //border-bottom-color: red;
            content: "";
        }

        &::before {
            top: -7px;
            left: 40px;
            border-right: 7px solid transparent;
            border-bottom: 7px solid #ccc;
            border-left: 7px solid transparent;
        }

        &::after {
            top: -6px;
            left: 41px;
            border-right: 6px solid transparent;
            border-bottom: 6px solid #fff;
            border-left: 6px solid transparent;
        }
    }

    .slide-fade-enter-active {
        transition: all 5s ease;
    }

    .slide-fade-leave-active {
        transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
}
</style>
