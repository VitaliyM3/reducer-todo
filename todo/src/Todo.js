import React, { useState, useReducer } from "react";
import { reducer, initialState } from "./reducers/reducer";
import Form from "./components/Form";
import List from "./components/List";


const Todo = () => {

    const [todo, dispatch] = useReducer(reducer, initialState);


    
    

    return (
        <div>
            <Form  addTodo={item => dispatch({
                type: "ADD_TODO",
                payload: item
            })} 
            />
            {/* <List  todoItems={todoItems} /> */}
        </div>
    )


};

export default Todo;