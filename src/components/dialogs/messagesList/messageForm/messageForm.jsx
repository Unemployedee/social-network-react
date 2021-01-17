import messageFormStyle from './messageFormStyle.module.css'
import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../../../redux/dialogsReducer';


function MessageFormContainer (props) {

    let messageText = React.createRef();

    let sendMessage = () => {
        // props.dispatch(sendMessageCreator());
        props.sendMessage();
    }
    let onChangeMessageText = () =>{
        // props.dispatch(updateNewMessageTextCreator(messageText.current.value));
        props.updateNewMessageText(messageText.current.value);
    }
    return (
        <div className = {messageFormStyle.messageForm}>
            <textarea
             ref = {messageText} 
             onChange = {onChangeMessageText}
             className = {messageFormStyle.messageText} 
             rows="4" 
             value = {props.newMessageText}
             />
            <button onClick = {sendMessage} className = {messageFormStyle.messageSend}>Отправить</button>
        </div>
    );
}

export default MessageFormContainer;