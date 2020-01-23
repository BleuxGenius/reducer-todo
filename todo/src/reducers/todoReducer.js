export const initialState = {
    todos: [

    ],
}

export const todoReducer = (state, action) => {
    // actions 
    switch (action.type) {
        case 'NEW_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now(),
                    },
                ],
            };
            case ' TOGGLE_TODO':
                return {
                    ...state,
                    todos: state.todos.map(todo => {
                        if (todo.id === action.payload.id) {
                            return {...todo, completed: !todo.completed};
                        } else {
                            return todo;
                        }
                    }),
                };

            case 'REMOVE_TODO':
            return {
                ...state, 
                todos: state.todos.filter(todo => todo.completed !== true),
            };
            default: 
            return state;
    }
};