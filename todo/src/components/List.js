import React from "react";


const List = (props) => {

    return (
        <li>
            {props.todoItems.item}
        </li>
    )
};

export default List;