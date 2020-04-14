import React, {useState} from "react";
import './nameRequest.css';

const NameRequest = ({name, setName, setNameRequest, setTodayFocus}) => {

    const [okName, setOkName] = useState(null);

    const onChangeInput = (e) => {
        setName(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (name.length !== 0 && name.length < 21) {
            setNameRequest(false);
            setTodayFocus(true);
        }

        if (name.length > 20) {
            setOkName('Character limit is 20!');
        }
    };

    return <div className = 'questionDiv'>
        <span className = 'question' > What is your name? </span>
        <form className = 'formAnswer' onSubmit = {onSubmitForm}>
            <input className = 'inputName' onChange={onChangeInput} />
            <span className = 'limit'>{okName}</span>
        </form>
    </div>
};

export {NameRequest}