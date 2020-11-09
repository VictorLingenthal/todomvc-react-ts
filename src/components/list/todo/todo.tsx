import React, { FC } from 'react';

let Todo: FC<{
  model: ITodo,
  removeTodo:Function,
  completeTodo:Function
}> = (props) => {

  const _onChangeHandler = () => props.completeTodo(props.model)
  const _onClickHandler = () => props.removeTodo(props.model)

    return (
      <li className={props.model.completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={props.model.completed}
            onChange={_onChangeHandler}
          />
          <label>{props.model.title}</label>
          <button
            className="destroy"
            onClick={_onClickHandler}
          ></button>
        </div>
      </li>
    );

}

export default Todo;
