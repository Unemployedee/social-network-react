import DialogsMessage from "./dialogsMessage/dialogsMessage";
import MessageFormContainer from "./messageForm/messageFormContainer";
import dialogsMessageStyle from "./messagesList.module.css"

function  MessagesList(props) {
    let DialogsMessageArr = props.dialogsMessagesData.map(message => <DialogsMessage userName = {message.userName} messageText = {message.messageText} />)
    return(
        <div className={dialogsMessageStyle.messages}>
            {DialogsMessageArr}
            <MessageFormContainer dispatch = {props.dispatch} newMessageText = {props.newMessageText}/>
        </div>
    )
}

export default MessagesList;