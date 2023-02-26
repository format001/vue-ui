import {
    getDateInfo,
    getMonthCount,
    getLastMonthRestCount
} from './utils.js'
import {
    createdDateTds,
    createdDateTrs
} from './creator'

let tdObj = {
    name: 1,
    className: 'current'
}

let tdArr = [tdObj, tdObj];

let dateData = {
    year: '2022',
    month: '11',
    trArr: [
        tdArr,
        tdArr
    ]
}

function createDateData () {
    let {year, month, date} = getDateInfo(),
        restDatesArr = getLastMonthRestCount(year, month),
        monthDates = getMonthCount(year, month),
        futureDates = 42 - (restDatesArr.length + monthDates);

    let dateTds = createdDateTds(restDatesArr, monthDates, futureDates, year, month, date);


    return createdDateTrs(dateTds)
}


export {
    createDateData
}