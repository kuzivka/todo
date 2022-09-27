interface ToDo {
  id: string;
  task: string;
  createdAt: number;
  expiresAt: number;
  done: boolean;
}

type SortingOption = 'task' | 'createdAt';
type TaskToShow = 'all' | 'active' | 'completed'

interface ToDoState {
  tasks: ToDo[];
  sortBy: SortingOption;
  show: TaskToShow;
}

interface TodoToShow {
  id: string;
  task: string;
  expiresAt: string;
  done: boolean;
}
