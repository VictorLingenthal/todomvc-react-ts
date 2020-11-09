import React, { FC } from 'react';
import { NavLink} from "react-router-dom";
import { useRouter } from "./../../router/router";

let Footer: FC<{
  count: number,
  todos: Array<ITodo>,
  clearCompleted: Function
}> = (props) => {

  let router = useRouter()
  let pathRoute = router.pathname.slice(1)

  const uncompletedCount = () => props.todos.filter(todo => !todo.completed).reduce((t) => t+1, 0)
  const _onClickHandler = () => props.clearCompleted()

  return props.count>0 ? (
    <footer className="footer">
    
      <span className="todo-count">{uncompletedCount()} items left</span>

      <ul className="filters">
        <li><NavLink
          className={pathRoute === '' ? 'selected': ''}
          to="">All
        </NavLink></li>
        <li><NavLink
          className={pathRoute === 'active' ? 'selected': ''}
          to="active">Active
        </NavLink></li>
        <li><NavLink
          className={pathRoute === 'completed' ? 'selected': ''}
          to="completed">Completed
        </NavLink></li>
      </ul>

      { props.count - uncompletedCount() > 0 &&
        <button
          className="clear-completed"
          onClick={_onClickHandler}
        >Clear completed</button>
      }

    </footer>
  ): null;

}

export default Footer
