import React, {useState} from "react";
import {Time} from "../time/time";
import {NameRequest} from "../nameRequest/nameRequest";
import {TodayFocus} from "../todayFocus/todayFocus";
import {FinalPage} from "../finalPage/finalPage";
import {ToDo} from "../../toDo/toDo";
import './startPage.css';

const StartPage = () => {

    const now = new Date();
    const hours = now.getHours();

    const welcome = (hours > 17 || hours < 5) ? 'Good evening' : 'Good day';

    const [name, setName] = useState('');
    const [nameRequest, setNameRequest] = useState(true);
    const [todayFocus, setTodayFocus] = useState(false);
    const [focusName, setFocusName] = useState('');
    const [finalPage, setFinalPage] = useState(false);
    const [toDo, setToDo] = useState(false);

    const visibleNameRequest = nameRequest ?
        <NameRequest
            name = {name}
            setName = {setName}
            setNameRequest = {setNameRequest}
            setTodayFocus = {setTodayFocus}
        /> : null;

    const visibleTodayFocus = todayFocus ?
        <TodayFocus
            name = {name}
            welcome = {welcome}
            focusName = {focusName}
            setFocusName = {setFocusName}
            setTodayFocus = {setTodayFocus}
            setFinalPage = {setFinalPage}
        /> : null;

    const visibleFinalPage = finalPage ?
        <FinalPage
            name = {name}
            focusName = {focusName}
            welcome = {welcome}
        /> : null;

    const visibleToDo = toDo ? <ToDo /> : null;

    return <div>
            <Time />
            {visibleNameRequest}
            {visibleTodayFocus}
            {visibleFinalPage}
            <div className = 'fullTodo' >
                <div> {visibleToDo} </div>
                <span className = 'todoSpan' onClick = {() => setToDo(!toDo)} >Todo</span>
            </div>
    </div>
};

export {StartPage}