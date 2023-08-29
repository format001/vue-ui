import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionType.js";
import action from './action.js';
import initialState from './state.js';
import { toRefs } from "vue";
import { useReducer } from '../hooks/index.js';

function reducer (state, { type, payload }) {

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
      onRemoveTodo(payload);
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