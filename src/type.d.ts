interface ToDo {
  id: string;
  task: string;
  createdAt: number;
  expiresAt: number;
  done: boolean;
}

type SortingOption = 'task' | 'createdAt';
type TaskToShow = 'all' | 'active' | 'completed';

interface TodoToShow {
  id: string;
  task: string;
  createdAt: string;
  expiresAt: string;
  done: boolean;
}
