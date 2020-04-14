import React, {useState} from "react";
import './addTodoItem.css';

const AddTodoItem = ({addTodo}) => {

    const [label, setLabel] = useState('');

    const changeTodo = (e) => {
        setLabel(e.target.value);
    };

    const addItemForm = (e) => {
        e.preventDefault();
        if (label.length !== 0) {
            addTodo(label);
        }

        setLabel('');
    };

    return <div>
        <form onSubmit = {addItemForm} >
            <input
                placeholder = 'New Todo'
                onChange = {changeTodo}
                value={label}
                className = 'newTodo'
            />
        </form>
    </div>
};

export {AddTodoItem}