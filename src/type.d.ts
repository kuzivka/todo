interface ToDo {
  id: number,
  task: string,
  createdAt: Date,
  expiresAt: Date,
  done: boolean,
}

type ToDoState = {
  tasks: ToDo[]
}
