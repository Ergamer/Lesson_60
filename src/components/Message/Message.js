import React, {Component} from 'react';
import './Message.css';


function Message (props) {

    return (
        <div className="Message">
            <span className="NewAuthor">{props.newAuthor}</span>
            <p className="NewMessage">{props.newMessage}</p>
        </div>
    );
}
export default Message;


