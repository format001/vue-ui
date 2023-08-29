import { createCalendarTdDate } from './tools'
export function getDateInfo (timeStamp) {
    const date = timeStamp ? new Date(timeStamp) : new Date();

    return {
        timestamp: getMidnightTimestamp(date),
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    }
}

export function getMidnightTimestamp (timeStamp) {
    const date = timeStamp ? new Date(timeStamp) : new Date();

    return date.setHours(0, 0, 0, 0);
}

export function getFirstWeekDay (year, month) { // 7
    const date = new Date(year, month - 1, 1);
    return date.getDay();   // 周几
}

export function getMonthDayCount (year, month) {
    const date = new Date(year, month, 0);
    return date.getDate();
}

export function getLastMonthRestDays (year, month) {
    const days = getFirstWeekDay(year, month);
    let lastDate = getMonthDayCount(year, month - 1);
    const restDays = [];

    while (restDays.length < days) {
        restDays.push(lastDate --);
    }

    return restDays.reverse();
}

export function getNextMonthRestDays (year, month) {
    const lastMonthRestDayCount = getFirstWeekDay(year, month);
    const currentMonthDayCount = getMonthDayCount(year, month);
    const nextMonthRestDayCount = 42 - (lastMonthRestDayCount + currentMonthDayCount);
    let restDays = [];

    for (let i = 1; i <= nextMonthRestDayCount; i ++) {
        restDays.push(i);
    }

    return restDays;
}

export function getMonthDayCountInfo (year, month) {
    const monthDayCount = getMonthDayCount(year, month),
        MonthDayCount = [];

    for (let i = 1; i <= monthDayCount; i++) {
        MonthDayCount.push({
            year,
            month,
            day: i,
            timestamp: new Date(year, month - 1, i).getTime(),
        })
    }
    return MonthDayCount;
}

export function createCalendarTrDate (date) {
    const { year, month } = getDateInfo(date)

    const prevMonthRestDays = getLastMonthRestDays(year, month);
    const currentMonthDayCountInfo = getMonthDayCountInfo(year, month);
    const nextMonthRestDays = getNextMonthRestDays(year, month);

    return {
        year,
        month,
        calendarTd: createCalendarTdDate(prevMonthRestDays, currentMonthDayCountInfo, nextMonthRestDays)
    }
}

export function getFormatDate (year, month, date) {
    const dateArr = [ year, month, date ];

    for (let i = 1; i < dateArr.length; i ++) {
        dateArr[i] < 10 && (dateArr[i] = '0' + dateArr[i]);
    }

    return dateArr.join('-')
}

export function createText (date) {
    const { year, month, day } = getDateInfo(date);
    return getFormatDate( year, month, day )
}

export function getRange (startOffset = 0, endOffset = 0, period = 'day') {
    const { year, month, day } = getDateInfo()

    switch (period) {
        case 'day':
            return {
                startDate: new Date(year, month - 1, day - startOffset).getTime(),
                endDate: new Date(year, month - 1, day - endOffset).getTime(),
            }
        case 'month':
            return {
                startDate: new Date(year, month - 1 - startOffset).getTime(),
                endDate: new Date(year, month - endOffset, 0).getTime(),
            }
        default:
            return {
                startDate: new Date(year, month - 1, day - startOffset).getTime(),
                endDate: new Date(year, month - 1, day - endOffset).getTime(),
            }
    }
}

export function checkPropsState ({start, end}) {
    var _start = new Date(new Date(start).setHours(0, 0, 0, 0));
    var _end = new Date(new Date(end).setHours(0, 0, 0, 0));

    if (_end < _start) {
        return [
            _end,
            _start
        ]
    }else {
        return [
            _start,
            _end
        ]
    }
}