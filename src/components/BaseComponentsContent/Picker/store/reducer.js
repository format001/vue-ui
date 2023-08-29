import { toRefs } from "vue";
import useReducer from './useReducer';
import action from './action'
import initialState from './state'
import {
    CHANGE_MONTH,
    CHANGE_YEAR,
    CLICK_TD,
    CLICK_PRESET,
    HOVER_DATE,
    IS_VISIBLE,
    CLICK_OUTSIDE
} from './actionType';
function reducer (state, {type, payload}) {
    const {
        onClickTdDate,
        onChangeCalendarMonth,
        onChangeCalendarYear,
        onHandlePreset,
        setVisible,
        onHoverDate,
        onClickOutside
    } = action(state);

    switch (type) {
        case CLICK_TD:
            onClickTdDate(payload)
            break;
        case CHANGE_MONTH:
            onChangeCalendarMonth(payload)
            break;
        case CHANGE_YEAR:
            onChangeCalendarYear(payload)
            break;
        case CLICK_PRESET:
            onHandlePreset(payload)
            break;
        case IS_VISIBLE:
            setVisible(payload)
            break;
        case HOVER_DATE:
            onHoverDate(payload)
            break
        case CLICK_OUTSIDE:
            onClickOutside(payload)
            break
        default:
            break;
    }
}

export default function (props) {
    const [
        state,
        dispatch
    ] = useReducer(reducer, initialState(props));

    return {
        ...toRefs(state),
        dispatch
    }
}