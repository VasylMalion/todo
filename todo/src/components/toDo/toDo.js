import React, {useState} from "react";
import {CountToDo} from "./countToDo/countToDo";
import {NoItemsTodos} from "./noItemsTodo/noItemsTodos";
import {AddTodoItem} from "./addTodoItem/addTodoItem";
import {TodoList} from "./todoList/todoList";
import './todo.css';

const ToDo = () => {

    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);
    const [id, setId] = useState(1);

    const addTodo = (label) => {
        const newItem = { id, label: label, done: false};
        const newTodos = [
                ...todos,
                newItem
            ];

        setTodos(newTodos);
        setId(id + 1);
    };

    const doneItem = (id) => {
        let idx = todos.findIndex( el => el.id === id);
        let oldItem = todos[idx];
        let newItem = {
            ...oldItem,
            done: !oldItem.done
        };

        const newArray = [
            ...todos.slice(0, idx),
            newItem,
            ...todos.slice(idx + 1)
        ];

        setTodos(newArray);
    };

    const deleteItem = (id) => {
        let idx = todos.findIndex( el => el.id === id);
        const newArray = [
            ...todos.slice(0, idx),
            ...todos.slice(idx + 1)
        ];

        setTodos(newArray);
    };

    const todosLen = (todos.length === 0) ?
        <NoItemsTodos/> : <TodoList
            todos = {todos}
            count = {count}
            deleteItem = {deleteItem}
            setCount = {setCount}
            doneItem = {doneItem}
        />;

    const doneCount = todos.filter( el => !el.done).length;

    return <div className = 'todo'>
        <CountToDo count = {doneCount} />
        { todosLen }
        <AddTodoItem addTodo = {addTodo}/>
    </div>
};

export {ToDo}