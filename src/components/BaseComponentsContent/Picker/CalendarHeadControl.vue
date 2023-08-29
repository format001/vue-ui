<template>
    <tr>
        <th class="direction-icon" @click="onChangeCalendarMonth('prev')">
            <i class="arrow-left"></i>
        </th>
        <th colspan="5" class="month">
            <span>{{ month }}</span>月
            <select class="yearselect" @change="onChangeCalendarYear($event)">
                <option v-for="(year, index) in rangeOfYear" :selected="year === year" :value="year"
                        :key="index">{{ year }}
                </option>
            </select>
        </th>
        <th class="direction-icon" @click="onChangeCalendarMonth('next')">
            <i class="arrow-right"></i>
        </th>
    </tr>
</template>

<script setup>
    const props = defineProps({
        month: {
            type: Number
        },
        year: {
            type: Number
        },
        rangeOfYear: {
            type: Array
        }
    })

    const emit = defineEmits([
        'onChangeCalendarYear',
        'onChangeCalendarMonth',
    ]);

    const onChangeCalendarMonth = (direction) => {
        emit('onChangeCalendarMonth', direction)
    }

    const onChangeCalendarYear = (e) => {
        const {value} = e.target;
        emit('onChangeCalendarYear', value)
    }

</script>

<style lang="scss">
.direction-icon {
    position: relative;
    .arrow-left:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 10px;
        width: 7px;
        height: 7px;
        border-top: solid 2px currentColor;
        border-right: solid 2px currentColor;
        transform: rotate(-135deg);
    }

    .arrow-right:before {
        content: '';
        position: absolute;
        right: 50%;
        top: 10px;
        width: 7px;
        height: 7px;
        border-top: solid 2px currentColor;
        border-right: solid 2px currentColor;
        transform: rotate(45deg);
    }
}
</style>