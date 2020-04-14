import React from "react";
import './noItemsTodos.css';

const NoItemsTodos = () => {

    return <div className = 'noTodos' >
        <span className = 'noTodosSpan' > No todos yet </span>
        <br />
        <span className = 'addTodoSpan' > Add a todo to get started </span>
    </div>
};

export {NoItemsTodos}