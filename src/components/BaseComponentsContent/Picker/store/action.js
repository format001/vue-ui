import {
    createCalendarTrDate,
    getDateInfo,
    getFormatDate
} from '../utils/date'

export default function (state) {
    /*
    * 任务分配机制 ->
    *
    * 通过任务类型进行任何的任务分配
    *
    * 任务执行器 -> 完成分配好的任务集合
    *
    * */
    const onClickTdDate = (timestamp) => {
        if (state.firstClickDate) {
            setFirstClickDate(false);

            if (timestamp > state.startDate.getTime()) {
                state.endDate = new Date(timestamp);
            } else {
                setStartDateAndEndDate(new Date(timestamp), state.startDate)
            }

            updateTextField(state.startDate, state.endDate);
            setVisible(false);
        } else {
            setFirstClickDate(true);
            state.originStartDate = state.startDate
            state.originEndDate = state.endDate
            setStartDateAndEndDate(new Date(timestamp), new Date(timestamp))
        }
    }

    const onChangeCalendarMonth = (direction) => {
        const { year, month } = state.leftCalendarDate;

        if (direction === 'prev') {
            if (month === 1) {
                setLeftCalendarDate([year - 1, 12])
            }else {
                setLeftCalendarDate([year, month - 1])
            }
        }else if (direction === 'next') {
            if (month === 12) {
                setLeftCalendarDate([year + 1, 1])
            }else {
                setLeftCalendarDate([year, month + 1])
            }
        }
    }

    const onChangeCalendarYear = (year) => {
        const { month } = state.leftCalendarDate
        setLeftCalendarDate([year, month])
    }

    const onHandlePreset = ({ startDate, endDate }) => {
        setStartDateAndEndDate(new Date(startDate), new Date(endDate))
        setLeftCalendarDate(startDate)
        setFirstClickDate(false);
        setHoverTimestamp(0, 0)
        setVisible(false);
        updateTextField(startDate, endDate)
    }

    const onHoverDate = (hoverTimeStamp) => {
        if (state.firstClickDate) {
            const timestamp = state.startDate.getTime();

            if (hoverTimeStamp > timestamp) {
                setHoverTimestamp(timestamp, hoverTimeStamp)
            } else {
                setHoverTimestamp(hoverTimeStamp, timestamp)
            }
        }
    }

    const onClickOutside = () => {
        const t = setTimeout(() => {
            if (state.visible) {
                setVisible(false)
            }
            if (state.firstClickDate) {
                setFirstClickDate(false);
                setStartDateAndEndDate(state.originStartDate,  state.originEndDate)
                setHoverTimestamp(0, 0)
            }
            clearTimeout(t);
        }, 0);
    }

    const setVisible = (show) => {
        // console.log(show)
        state.visible = show
    }

    function updateTextField (startDate, endDate) {
        const { year: sYear, month: sMonth, day: sDay } = getDateInfo(startDate)
        const { year: eYear, month: eMonth, day: eDay } =getDateInfo(endDate)

        state.startText = getFormatDate(sYear, sMonth, sDay);
        state.endText =  getFormatDate(eYear, eMonth, eDay);
    }
    
    function setHoverTimestamp (start, end) {
        state.hoverStartTimestamp = start
        state.hoverEndTimestamp = end
    }

    function setFirstClickDate (boolean) {
        state.firstClickDate = boolean
    }

    function setStartDateAndEndDate (startDate, endDate) {
        state.startDate = startDate
        state.endDate = endDate
    }

    function setLeftCalendarDate (date) {
        state.leftCalendarDate = createCalendarTrDate(date);
    }

    return {
        onClickTdDate,
        onChangeCalendarMonth,
        onChangeCalendarYear,
        onHandlePreset,
        setVisible,
        onHoverDate,
        onClickOutside
    }
}