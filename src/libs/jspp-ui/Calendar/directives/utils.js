
function getDateInfo (timeStamp) {
    const dataInfo = timeStamp ? new Date(timeStamp) : new Date();

    return {
        year: dataInfo.getFullYear(),
        month: dataInfo.getMonth() + 1,
        date: dataInfo.getDate()
    }
}

function getStartWeekDays (year, month) {
    return new Date(year, month -1, 1).getDay();
}

function getMonthCount (year, month) {
    return new Date(year, month, 0).getDate();
}

function getLastMonthRestCount (year, month) {
    let count = getStartWeekDays(year, month),
        lastMonthCount = getMonthCount(year, month - 1),
        restDates = [];

    for (var i = 0; i < count; i++) {
        restDates.push(lastMonthCount--)
    }

    return restDates
}

function getFormatDate (year, month, date) {
    const dateArr = [ year, month, date ];

    for (let i = 1; i < dateArr.length; i ++) {
        dateArr[i] < 10 && (dateArr[i] = '0' + dateArr[i]);
    }

    return dateArr.join('-');
}

export {
    getDateInfo,
    getMonthCount,
    getLastMonthRestCount,
    getFormatDate
}