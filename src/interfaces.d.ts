
interface ITodo {
  completed: boolean
  title: string
}

interface ITodos {
  todos: Array<ITodo>
}

interface ITodoModel {
  todos: Array<ITodo>,
}
