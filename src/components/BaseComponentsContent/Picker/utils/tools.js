export function range (start = 0, end, step = 1) {
    const arr = [];

    start = +start;
    end = +end;

    for (let i = start; i <= end; i += step) {
        arr.push(i);
    }

    return arr;
}

export const isObject = (date) => {
    return typeof date === 'object' && date !== null;
}

export function createTrArr () {
    const arr = [];

    for (let i = 0; i < 6; i++) {
        arr.push([]);
    }

    return arr
}

export function createCalendarTdDate (prevMonth, currentMonth, nextMonth) {
    let trArr = createTrArr(),
        tdArr = [...prevMonth, ...currentMonth, ...nextMonth],
        index = 0;

    trArr.forEach(tr => {
        for (let i = 0; i < 7; i++) {
            tr.push(tdArr[index]);
            index ++;
        }
    })

    return trArr;
}