interface ToDo {
  id: string;
  task: string;
  createdAt: number;
  expiresAt: number;
  done: boolean;
}

type SortingOption = 'task' | 'createdAt';
type TaskToShow = 'all' | 'active' | 'completed';

// type ToDoState = ReturnType<typeof store.getState>;

// interface ToDoState {
//   tasks: ToDo[];

//   sortBy: SortingOption;
//   filterBy: TaskToShow;
//   searchQuery: string;
// }

interface TodoToShow {
  id: string;
  task: string;
  createdAt: string;
  expiresAt: string;
  done: boolean;
}
