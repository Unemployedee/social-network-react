const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text}) ;

let initialState = {
  newMessageText: "",

  dialogsMessagesData: [
    { userName: "Алексей", messageText: "Привет" },
    {
      userName: "Алексей",
      messageText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi eveniet iste nobis maxime quae ipsam atque labore vitae natus, dolore, minima harum corporis illo hic necessitatibus tempore? Quis, dolorem fugiat?Laborum repudiandae cupiditate ea consectetur officiis itaque similique ipsam beatae eum quaerat ex dolorem, explicabo obcaecati harum nisi quis esse, corrupti officia hic pariatur alias magni aut voluptatibus? Nisi, eum?",
    },
    {
      userName: "Алексей",
      messageText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam labore tempora, alias maiores nam dolorem. Maiores numquam repellendus voluptatem fugiat magnam placeat blanditiis atque provident doloribus nulla, suscipit laborum?",
    },
    {
      userName: "Алексей",
      messageText:
        "Quidem magnam qui sapiente. Doloribus ab autem quisquam accusantium esse fugiat expedita obcaecati sunt perspiciatis, ratione illo molestiae eligendi perferendis, accusamus maiores. Minus neque cupiditate quod consectetur quis a perferendis.",
    },
    { userName: "ОоООо", messageText: "а" },
  ],
  dialogsListData: [
    { id: 1, userName: "Дима" },
    { id: 2, userName: "Нина" },
    { id: 3, userName: "Рита" },
    { id: 4, userName: "Наталья" },
    { id: 5, userName: "Жорик" },
    { id: 6, userName: "Егор" },
    { id: 7, userName: "Полина" },
    { id: 8, userName: "Михаил" },
  ],
};

const dialogsReduser = (state = initialState, action) => {

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