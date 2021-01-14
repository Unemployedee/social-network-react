
import dialogsMessageStyle from './dialogsMessageStyle.module.css'

function DialogsMessage(props) {
    
return(
<div className={dialogsMessageStyle.dialogsMessage}>
                    <div className={dialogsMessageStyle.MessageUser}>
                        <img className = {dialogsMessageStyle.MessageUserAvatar} src="https://thumbs.dreamstime.com/b/%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C-%D0%BC%D0%BE%D0%BB%D0%BE%D0%BA%D0%B0-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4-d-114090933.jpg"
                        alt="avatar"/>
                        <p className = {dialogsMessageStyle.MessageUserName}>
                           {props.userName}
                        </p>
                     </div>
                     <div className={dialogsMessageStyle.dialogsMessageText}>
                         <p className={dialogsMessageStyle.MessageText}>{props.messageText}</p>
                     </div>
                </div>
);
                }

                export default DialogsMessage;