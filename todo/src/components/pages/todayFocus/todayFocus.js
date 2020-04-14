import React, {useState} from "react";
import './todayFocus.css'

const TodayFocus = ({name, welcome, focusName, setFocusName, setTodayFocus, setFinalPage}) => {

    const [okFocus, setOkFocus] = useState(null);

    const onChangeInput = (e) => {
        setFocusName(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (focusName.length !== 0 && focusName.length < 101) {
            setTodayFocus(false);
            setFinalPage(true);
        }

        if (focusName.length > 100) {
            setOkFocus('Character limit is 100!');
        }
    };

    return <div className = 'questionDiv'>
        <span className = 'question' > {`${welcome}, ${name}`} </span>
        <span className = 'focusToday' > What is your main focus for today? </span>
        <form onSubmit = {onSubmitForm} className = 'formAnswer'>
            <input className = 'inputName' onChange={onChangeInput} />
            <span className = 'limit'>{okFocus}</span>
        </form>
    </div>
};

export {TodayFocus}