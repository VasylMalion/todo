import React from "react";
import './finalPage.css';

const FinalPage = ({name, focusName, welcome}) => {

    return <div className = 'questionDiv'>
        <span className = 'question' > {`${welcome}, ${name}`} </span>
        <br />
        <span className = 'today' > TODAY </span>
        <span className = 'final'> {focusName} </span>
    </div>
};

export {FinalPage}