import { toRefs } from "vue";
import useReducer from './useReducer';
import action from './action'
import initialState from './state'
import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
} from './actionType';
function reducer (state, {type, payload}) {
    const {
        onAddTodo,
        onToggleTodo,
        onRemoveTodo
    } = action(state);

    switch (type) {
        case ADD_TODO:
            onAddTodo(payload);
            break;
        case TOGGLE_TODO:
            onToggleTodo(payload);
            break;
        case REMOVE_TODO:
            onRemoveTodo(payload)
            break;
        default:
            break;
    }
}

export default function () {
    const [
        state,
        todoDispatch
    ] = useReducer(reducer, initialState);

    return {
        ...toRefs(state),
        todoDispatch
    }
}