
import DialogsList from './dialogsList/dialogsList';
import dialogsStyle from './dialogsStyle.module.css'
import MessagesList from './messagesList/messagesList';


function Dialogs(props) {
    return (
        <div className={dialogsStyle.dialogs}>
            
            <div className={dialogsStyle.dialogsList}>
                <h3 className={dialogsStyle.dialogsHeader}>Диалоги</h3>
                <DialogsList dialogsListData = {props.state.dialogsListData}/>
                
            </div>
            <div className = {dialogsStyle.delimiter}></div>
            <MessagesList
                dialogsMessagesData = {props.state.dialogsMessagesData}
                newMessageText = {props.state.newMessageText}
                dispatch = {props.dispatch} />
        </div>
    );

}

export default Dialogs;
