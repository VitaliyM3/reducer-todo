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
            id: new Date()
        }
    ]
};

export const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state, action.payload
            ]
    }
    
};