<template>
    <div class="calendar-header">
        <div class="year-month">
            <span class="year">{{ year }}年</span>
            <span class="month">{{ month }}月</span>
        </div>
        <div class="date-btn">
            <button class="btn last-month">上个月</button>
            <button class="btn future-month">下个月</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CalendarHeader",
    props: {
        year: Number,
        month: Number
    }
}
</script>

<style lang="scss" scoped>
.calendar-header{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid  #bcd9f8;

    .year-month{
        float: left;
        height: 100%;
        line-height: 50px;
        padding-left: 20px;
        cursor: default;
    }

    .date-btn{
        float: right;
        height: 100%;
        line-height: 50px;
        padding-right: 20px;

        .btn{
            padding: 4px 6px;
            box-sizing: border-box;
            border: 1px solid #bcd9f8;
            background-color: #fff;
            border-radius: 15%;

            &:nth-child(1) {
                margin-right: 4px;
            }

            &:hover{
                background-color: #bcd9f8;
            }
        }
    }
}
</style>