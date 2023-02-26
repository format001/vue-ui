import { getFormatDate } from './utils'

function createdDateTds (restDatesArr, monthDates, futureDates, year, month, date) {
    let DateTds = [],
        formatDate = getFormatDate(year, month, date).slice(0, 8);

    restDatesArr.forEach(function (date) {
        DateTds.push({
            name: date,
            info: formatDate + date,
            className: 'last'
        })
    })

    for (var i = 1; i <= monthDates; i++) {

        if (i === date) {
            DateTds.push({
                name: i,
                info: formatDate + (i < 10 ? ('0' + i) : i),
                className: 'current now'
            })
        } else {
            DateTds.push({
                name: i,
                info: formatDate + (i < 10 ? ('0' + i) : i),
                className: 'current'
            })
        }
    }

    for (var j = 1; j <= futureDates; j++) {
        DateTds.push({
            name: j,
            info: formatDate + (i < 10 ? ('0' + i) : i),
            className: 'future'
        })
    }

    return DateTds
}


function createdDateTrs (tds) {
    let trArr = [],
        i = 0;

    for (var j = 0; j < 6; j++) {
        let dateTrs = [];

        for (let k = 0; k < 7; k++) {
            dateTrs.push(tds[i ++])
        }

        trArr.push(dateTrs);
    }

    return trArr;
}

export {
    createdDateTds,
    createdDateTrs
}