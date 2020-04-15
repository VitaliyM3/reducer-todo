import React, { useState } from "react";
import List from "./List";

// need handle submit in form somewhere

const Form = ({addTodo}) => {

    const [todo, setTodo] = useState("");

    console.log("props from form", addTodo);
    console.log("this is the todo var", todo);

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                name="todo"
                value={todo}
                onChange={handleChange}
                />

                <button type="submit" >ADD</button>
            </form>
            
        </div>
    )
};

export default Form;