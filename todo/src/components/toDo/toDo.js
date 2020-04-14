import React, {useState} from "react";
import {CountToDo} from "./countToDo/countToDo";
import {NoItemsTodos} from "./noItemsTodo/noItemsTodos";
import {AddTodoItem} from "./addTodoItem/addTodoItem";
import {TodoList} from "./todoList/todoList";
import {FilterItem} from "./filterItem/filterItem";
import './todo.css';

const ToDo = () => {

    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(1);
    const [filter, setFilter] = useState('all');

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

    const filterAllItems = (filter, todos) => {
        switch (filter){
            case 'all':
                return todos;
            case 'active':
                return todos.filter( item => !item.done);
            case 'done':
                return todos.filter( item => item.done);
            default:
                return todos;
        }
    };

    const todosLen = (todos.length === 0) ?
        <NoItemsTodos/> : <div>
            <FilterItem
                filter = {filter}
                setFilter = {setFilter}
            />
            <TodoList
                todos = {todos}
                deleteItem = {deleteItem}
                doneItem = {doneItem}
                filter={filter}
                filterAllItems = {filterAllItems}
            /></div>;

    const doneCount = todos.filter( el => !el.done).length;

    return <div className = 'todo'>
        <CountToDo count = {doneCount} />
        { todosLen }
        <AddTodoItem addTodo = {addTodo}/>
    </div>
};

export {ToDo}