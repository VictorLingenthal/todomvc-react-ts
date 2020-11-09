import React, { FC } from 'react';
import Todo from './todo/todo'

let List: FC<{
  count: number,
  todos: Array<ITodo>,
  removeTodo:Function,
  completeTodo:Function,
  completeAllTodos:Function
}> = (props) => {

  const _onClickHandler = () => props.completeAllTodos()

  let todoItems = props.todos.map((todo) =>
    <Todo
      key={props.todos.indexOf(todo)}
      model={todo}
      removeTodo={props.removeTodo}
      completeTodo={props.completeTodo}
    />
  );

  return props.count>0 ? (
    <section className="main">

      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onClick={_onClickHandler}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todoItems}
      </ul>

    </section>
  ): null;

}

export default List;
