import React from "react";


const List = ({todoItems}) => {

    console.log("list todoitems", todoItems);

    return (

        <div>
            {
            todoItems.todo.map((element => <li key={element.id} >

                {element.item}
            </li>))
            }
        </div>

        // <li>
        //     {todoItems.item}
        //     {console.log("these are the props", todoItems)}
        // </li>
    )
};

export default List;