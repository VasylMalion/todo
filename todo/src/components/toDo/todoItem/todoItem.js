import React from "react";
import { MdDeleteForever  } from 'react-icons/md';
import './todoItem.css';

const TodoItem = ({label, id, doneItem, deleteItem}) => {

    return <div key = {id}>
        <span> - </span>
        <span className = 'labelItem' onClick = {() => doneItem(id)}>{label} </span>
        <span className = 'delete' onClick = { () => deleteItem(id)}>
            <MdDeleteForever/>
        </span>
    </div>
};

export {TodoItem}