const initialState: ToDoState = {
    tasks:[],
    sortBy: 'createdAt',
    hideDone: false
}

export const todoReducer = (state: ToDoState = initialState, action: ToDoAction) => {
    switch(action.type){
        case 'ADD_TODO': {
            return {...state, tasks: [...state.tasks, action.payload], }
        }
    }
    return state;
};
