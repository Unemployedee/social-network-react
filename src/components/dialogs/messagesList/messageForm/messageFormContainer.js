import MessageForm from './messageForm'
import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../../../redux/dialogsReducer';


function MessageFormContainer (props) {

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    }
    let updateNewMessageText = (text) =>{
        props.dispatch(updateNewMessageTextCreator(text));
    }
    return (
        <div>
           < MessageForm sendMessage = {sendMessage} updateNewMessageText = {updateNewMessageText} newMessageText = {props.newMessageText} />
        </div>
    );
}

export default MessageFormContainer;