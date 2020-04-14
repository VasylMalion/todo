import React from "react";
import './nameRequest.css';

const NameRequest = ({name, setName, setNameRequest, setTodayFocus}) => {

    const onChangeInput = (e) => {
        setName(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (name.length !== 0) {
            setNameRequest(false);
            setTodayFocus(true);
        }
    };

    return <div className = 'questionDiv'>
        <span className = 'question' > What is your name? </span>
        <form className = 'formAnswer' onSubmit = {onSubmitForm}>
            <input className = 'inputName' onChange={onChangeInput} />
        </form>
    </div>
};

export {NameRequest}