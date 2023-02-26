import {
    getDateInfo,
    getMonthCount,
    getLastMonthRestCount
} from './utils.js'
import {
    createdDateTds,
    createdDateTrs
} from './creator'

export default {
    mounted (el) {
        let {year, month, date} = getDateInfo(),
            restDatesArr = getLastMonthRestCount(year, month),
            monthDates = getMonthCount(year, month),
            futureDates = 42 - (restDatesArr.length + monthDates);

        // let dateTds = createdDateTds(restDatesArr, monthDates, futureDates, date);
        //
        // let dateTrs = createdDateTrs(dateTds);

        console.log(el)
    }
}