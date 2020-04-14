import React from "react";
import Moment from "react-moment";
import './time.css';

const Time = ({dateToFormat}) => {

    return <div className = 'time' >
        <Moment format = "HH:mm" >{dateToFormat}</Moment>
    </div>
};

export {Time}