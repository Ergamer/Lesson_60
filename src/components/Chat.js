import React, {Component} from 'react';
import './Chat.css';
import Writer from "../components/Writer/Writer"
import Message from "../components/Message/Message"

function Chat (props) {

    return (
        <div className="Chat">
            <Writer click={props.click} author={props.author} message={props.message} authorValue={props.authorValue} messageValue={props.messageValue}/>
            {props.messages.map((message) => {
                return <Message newAuthor={message.author} newMessage={message.message}/>
            })}

        </div>
    );
}
export default Chat;

