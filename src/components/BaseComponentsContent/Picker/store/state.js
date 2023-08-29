import {
    checkPropsState,
    createCalendarTrDate,
    createText,
    getMidnightTimestamp
} from '../utils/date'
import { range } from '../utils/tools'

export default function (props) {
    const [ start, end ] = checkPropsState(props);

    return {
        startDate: start,
        endDate: end,
        originStartDate: start,
        originEndDate: end,
        leftCalendarDate: createCalendarTrDate(start),
        midnightTimestamp: getMidnightTimestamp(),
        firstClickDate: false,
        hoverStartTimestamp: 0,
        hoverEndTimestamp: 0,
        RangeOfYear: range(2012, 2033),
        startText: createText(start),
        endText: createText(end),
        visible: true
    }
}