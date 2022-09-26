interface ToDo {
  id: string;
  task: string;
  createdAt: number;
  expiresAt: number;
  done: boolean;
}

type SortingOption = 'task' | 'createdAt';

interface ToDoState {
  tasks: ToDo[];
  sortBy: SortingOption;
  hideDone: boolean;
}

interface TodoToShow {
  id: string;
  task: string;
  expiresAt: string;
  done: boolean;
}
