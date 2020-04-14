import React, { useState } from "react";
import List from "./List";

const Form = (props) => {

    const [todo, setTodo] = useState("");

    return (
        <div>
            <form>
                <input
                value={todo}
                onChange={e => setTodo(e.target.value)}
                />
                <button
                onClick={
                    () => {props.addTodo(todo);
                    setTodo('');
                    }
                }
                >ADD</button>
            </form>
            <List list={todo} />
        </div>
    )
};

export default Form;