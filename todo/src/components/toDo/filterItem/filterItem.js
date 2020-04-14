import React from "react";
import './filterItem.css';

const FilterItem = ({filter, setFilter}) => {

    const buttons = [
        {filterType: 'all', label: 'All'},
        {filterType: 'active', label: 'Active'},
        {filterType: 'done', label: 'Done'}
    ];

    const allButtons = buttons.map( ({filterType, label}) => {

        const activeBtn =  filter === filterType;

        const classBtn = activeBtn ? 'activeBtn' : '';

        return (
            <button
                key = {filterType}
                className = {`btn ${classBtn}`}
                onClick = {() => setFilter(filterType)}
                > {label} </button>
        );
    });

    return <div>
        {allButtons}
    </div>
};

export {FilterItem}