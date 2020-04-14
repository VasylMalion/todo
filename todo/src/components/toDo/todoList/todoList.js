import React from "react";
import {TodoItem} from "../todoItem/todoItem";
import './todoList.css';

const TodoList = ({todos, doneItem, deleteItem, filterAllItems, filter}) => {

    const todosMap = filterAllItems(filter, todos).map( item => {

        let classTodoItem = 'todoList';

        if (item.done) {
            classTodoItem += ' doneTodoItem';
        }

        return <div
            className = {classTodoItem}
            key = {item.id} >
            <TodoItem
                id = {item.id}
                label = {item.label}
                doneItem = {doneItem}
                deleteItem = {deleteItem}
            />
        </div>
    });

    return (todosMap.length > 0) ?
        <div> {todosMap} </div> :
        <span className = 'noItems' > There are no items</span>;
};

export {TodoList}