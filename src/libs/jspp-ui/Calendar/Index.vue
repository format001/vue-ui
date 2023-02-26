<template>
    <div v-calendar class="calendar">
        <calendar-header
            :year="Number(dateData.year)"
            :month="Number(dateData.month)"
        ></calendar-header>
        <date-table>
            <date-thead></date-thead>
            <date-tbody
                :tr-arr="dateData.trArr"
                @td-click="tdClick"
            ></date-tbody>
        </date-table>
    </div>
</template>

<script>
import calendar from './directives/index'

import CalendarHeader from './CalendarHeader'
import DateTable from './DateTable/Index'
import DateThead from './DateTable/DateThead.vue'
import DateTbody from './DateTable/DateTbody.vue'

import { createDateData } from './directives/dateData'

export default {
    name: "CalendarUi",
    directives: {
        calendar
    },
    components: {
        CalendarHeader,
        DateTable,
        DateThead,
        DateTbody
    },
    data() {
      return {
          dateData: {
              year: '2022',
              month: '11',
              trArr: []
          }
      }
    },
    mounted () {
        this.dateData.trArr = createDateData()
    },
    methods: {
        tdClick (info) {
            console.log(info)
        }
    }
}
</script>

<style lang="scss" scoped>
.calendar{
    width: 350px;
    box-sizing: border-box;
    border-radius: 25px;
    //background-color: #cacaca;
    border: 1px solid #1989FA;
    overflow: hidden;
    font-size: 14px;
}
</style>