import React, { FC, useState } from 'react';

let Header: FC<{
  addTodo:Function
}> = (props) => {

  let [title, setTitle] = useState('')

  const _onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      props.addTodo(title);
      setTitle('');
    }
  };

  const _onChange = (e: React.FormEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onKeyDown={_onKeyDownHandler}
        onChange={_onChange}
      />
    </header>
  );

}

export default Header;
