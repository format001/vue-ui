export default function (state) {

  /*
  * addTodoMap -> todoServer['addTodo']: [
  *   addTodo,
  *   addCount
  * ]
  *
  * test a + 1
  *
  * ADD_TODO: [
  *   addTodoMap,
  *   test
  * ]
  * 任务分配机制 ->
  *
  * 通过任务类型进行任何的任务分配
  *
  * 任务执行器 -> 完成分配好的任务集合
  *
  * */

  const onAddTodo =  (todo) => {
   state.todoList.push(todo)
    addCount();
  }

  const onToggleTodo = (id) => {
    state.todoList = state.todoList.map(item => {
      item.id === id && (item.completed = !item.completed);
      return item;
    });
  }

  const onRemoveTodo = (id) => {
    state.todoList = state.todoList.filter(item => item.id !== id);
    removeCount();
  }

  function addCount () {
    state.addCount ++;
  }

  function removeCount () {
    state.removeCount ++;
  }
  
  return {
    onAddTodo,
    onToggleTodo,
    onRemoveTodo
  }
}