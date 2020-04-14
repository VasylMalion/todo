import React from "react";
import './countToDo.css';

const CountToDo = ({count}) => {

    return <div className = 'countTodo' >
        <span> {count} TO DO </span>
    </div>
};

export {CountToDo}