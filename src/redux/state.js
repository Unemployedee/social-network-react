import dialogsReduser from "./dialogsReducer";
import profileReducer from "./profileReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text}) ;


let store = {
  _state: {
    profilePage: {
      newPostText: "",

      postsListData: [
        {
          text:
            "LK JSDFIJSD FOSJDFKSMDFNSKDNFKSD FNSJKDNFLKSDF NSKDFLKD NFKLNSFD SD KLJKDS JFSDKLN DSJKFNSJDKFN",
          likesCount: 1,
        },
        { text: "Бла бла бла2", likesCount: 5 },
        { text: "Бла бла бла3", likesCount: 2 },
        { text: "Бла бла бла4", likesCount: 19 },
        {
          text:
            "Это пост между прочим пост между прочим пост между прочим пост между прочим пост между прочим пост между прочим пост между прочим ",
          likesCount: 2,
        },
      ],
    },

    dialogsPage: {
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
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this.renderEntireTree = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);

    this.renderEntireTree(this._state);

  }

};

window.store = store;

export default store;