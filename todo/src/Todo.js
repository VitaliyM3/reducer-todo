import React, { useState, useReducer } from "react";
import { reducer, initialState } from "./reducers/reducer";
import Form from "./components/Form";
import List from "./components/List";



const Todo = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log("state and dispatch from Todo comp", state, dispatch);

    const addTodo = (item) => {
        dispatch({ type: "ADD_TODO", payload: item });
    };
    
    

    return (
        <div>

            {/* <Form  addTodo={newItem => dispatch({
                type: "ADD_TODO",
                payload: newItem
            })} 
            /> */}

            <Form addTodo={addTodo} />



            {/* <Form  addTodo={todo} /> */}
            {/* <Form  /> */}
            <List  todoItems={state} />
        
        </div>
    )
};

export default Todo;