<template>
    <table class="calendar-table" >
        <thead class="table-header">
            <calendar-head-control
                :month="$attrs['calendar-date']['month']"
                :year="$attrs['calendar-date']['year']"
                :range-of-year="$attrs['range-of-year']"
                @on-change-calendar-month="$emit('onChangeCalendarMonth', $event)"
                @on-change-calendar-year="$emit('onChangeCalendarYear', $event)"
            ></calendar-head-control>
            <calendar-head-week></calendar-head-week>
        </thead>
        <tbody>
            <calendar-body
                :calendar-date="$attrs['calendar-date']"
                :start-date="$attrs['start-date']"
                :end-date="$attrs['end-date']"
                :hover-start="$attrs['hover-start']"
                :hover-end="$attrs['hover-end']"
                :midnight-timestamp="$attrs['midnight-timestamp']"
                @on-click-td-date="$emit('onClickTdDate', $event)"
                @on-hover-date="$emit('onHoverDate', $event)"
            ></calendar-body>
        </tbody>
    </table>
</template>

<script setup>
    import CalendarHeadControl from './CalendarHeadControl.vue'
    import CalendarHeadWeek from './CalendarHeadWeek.vue'
    import CalendarBody from './CalendarBody.vue'

</script>

<style lang="scss">
.calendar-table {
    float: left;
    width: 240px;
    padding: 0 10px;
    border-spacing: 0;
    border-collapse: collapse;
    box-sizing: border-box;

    td,
    th {
        width: 34px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        vertical-align: middle;
        font-size: 12px;
        white-space: nowrap;
        cursor: pointer;
    }

}
</style>
