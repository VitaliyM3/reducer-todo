// export const initialState = [
//     {
//         item: 'Learn about reducers',
//         completed: false,
//         id: 3892987589
//       }
// ];

export const initialState = {
    todo: [
        {
            item: '',
            completed: false,
            id: 1
        },
        {
            item: 'work',
            completed: false,
            id: 2
        }
    ]
};

export const reducer = (state, action) => {

    console.log("state inside reducer", state, "action inside reducer", action);

    switch (action.type) {
        case "ADD_TODO":
            // const newTodo = {
            //     item: action.payload,
            //     completed: false,
            //     id: Date.now()
            // };
            return {
                // ...state, todo: [...state.todo, newTodo],
                ...state, todo: [...state.todo, {item: action.payload}]
                
            };
        default:
            return state;
    }
    
};