
class TodoModel implements ITodoModel {

  public todos: Array<ITodo>;

  constructor() {
    this.todos = [{
      title: 'test',
      completed: false
    },{
      title: 'test2',
      completed: true
    },{
      title: 'test3',
      completed: true
    },{
      title: 'test4',
      completed: false
    }];
  }

}

export default TodoModel;
