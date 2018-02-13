import React, {Component} from 'react';
import './Writer.css';


function Writer (props) {

    return (
        <div className="Writer">
            <input type="text" className="UserName" onChange={props.author} value={props.authorValue}></input>
            <input type="text" className="UserMessage" onChange={props.message} value={props.messageValue}></input>
            <button type="button" className="Btn" onClick={props.click}>Submit</button>
        </div>
    );
}
export default Writer;

