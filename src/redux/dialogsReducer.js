const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogsReduser = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                userName: "АааАа",
                messageText: state.newMessageText,
            };
            state.dialogsMessagesData.push(message);
            // this.renderEntireTree(this._state);
            state.newMessageText = "";
            return (state);

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return (state);

        default:
            return state;
    }
}

export default dialogsReduser;