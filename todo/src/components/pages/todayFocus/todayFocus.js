import React from "react";
import './todayFocus.css'

const TodayFocus = ({name, welcome, focusName, setFocusName, setTodayFocus, setFinalPage}) => {

    const onChangeInput = (e) => {
        setFocusName(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (focusName.length !== 0) {
            setTodayFocus(false);
            setFinalPage(true);
        }
    };

    return <div className = 'questionDiv'>
        <span className = 'question' > {`${welcome}, ${name}`} </span>
        <span className = 'focusToday' > What is your main focus for today? </span>
        <form onSubmit = {onSubmitForm} className = 'formAnswer'>
            <input className = 'inputName' onChange={onChangeInput} />
        </form>
    </div>
};

export {TodayFocus}