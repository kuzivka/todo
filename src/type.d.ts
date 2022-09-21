interface ToDo {
  id: number,
  task: string,
  createdAt: Date,
  expiresAt: Date,
  done: boolean,
}

interface ToDoState {
  tasks: ToDo[]
}

interface ToDoAction {
  type: string,
  payload: ToDo
}

