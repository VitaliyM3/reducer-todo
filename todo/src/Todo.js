import React, { useState, useReducer } from "react";
import {initialState} from "./reducers/reducer";

const Todo = () => {

    // const [todo, dispatch] = useReducer(reducer, initialState);
    const [todos, setTodos] = useState(initialState);
    
    const handleChange = () => {

    };
    

    return (
        <div>
            <input
            type="text"
            name=""
            value={}
            onChange={handleChange}
            />
            <button>ADD</button>
        </div>
    )


};

export default Todo;