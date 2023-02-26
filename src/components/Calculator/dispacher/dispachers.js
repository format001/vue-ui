import reducer from './reducer.js'
import {
    SET_NUMBER,
    CHANGE_METHOD
} from './actions.js'


// type -> 事件 -> 逻辑 -> type -> 派发器 -> 数据更改
export default (ctx) => {
    const {
        setNumber,
        changeMethod
    } = reducer(ctx.$data)

    return function (type, ...args) {
        switch (type) {
            case SET_NUMBER:
                ctx.result = setNumber(...args);
                break;
            case CHANGE_METHOD:
                ctx.result = changeMethod(...args);
                break;
            default:
                break;
        }

    }
}