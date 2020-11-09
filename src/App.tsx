import React, { FC, useState, useMemo } from 'react'
import './App.css'

import TodoModel from './data/todoModel'
import { useRouter } from "./router/router";

import Header from './components/header/header'
import List from './components/list/list'
import Footer from './components/footer/footer'


let App: FC = () => {

  let model = new TodoModel()
  let router = useRouter()
  let pathRoute = router.pathname.slice(1)

  const [todos, setTodos] = useState<Array<ITodo>>(model.todos)
  const count = () => todos.filter(() => true).reduce((t) => t+1, 0)

  let visibleTodos = useMemo(() =>
      pathRoute ? todos.filter(i =>
            pathRoute === "active" ? !i.completed : i.completed
          ) : todos,
    [todos, pathRoute]
  );

  let addTodo = (title: string) => setTodos([...todos, {title, completed: false}])
  let clearCompleted = () => setTodos(todos.filter(todo => !todo.completed))
  let completeAllTodos = () => setTodos(todos.map(todo => {return {completed: true, title: todo.title}}))
  let completeTodo = (cTodo: ITodo) => setTodos(todos.map(
      todo => todo === cTodo ? {title: cTodo.title, completed: !cTodo.completed} : todo))
  let removeTodo = (removeTodo: ITodo) => setTodos(todos.filter(todo => todo !== removeTodo))

  return (
    <div className="todoapp">
      <Header addTodo={addTodo}/>
      <List
        count={count()}
        todos={visibleTodos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        completeAllTodos={completeAllTodos}
      />
      <Footer
        count={count()}
        todos={todos}
        clearCompleted={clearCompleted}
      />
    </div>
  );

}

export default App;
