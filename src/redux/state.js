const addPostActionType = 'ADD-POST';
const updateNewPostTextActionType = 'UPDATE-NEW-POST-TEXT';
const sendMessageActionType = 'SEND-MESSAGE';
const updateNewMessageTextActionType = 'UPDATE-NEW-MESSAGE-TEXT';

export const addPostCreator = () => ({type: addPostActionType})
export const updateNewPostTextCreator = (text) => ({type: updateNewPostTextActionType, newText: text})


export const sendMessageCreator = () => ({type: sendMessageActionType});
export const updateNewMessageTextCreator = (text) => ({type: updateNewMessageTextActionType, newText: text}) ;


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

  // addPost() {
  //   let newPost = {
  //     text: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };
  //   this._state.profilePage.postsListData.push(newPost);
  //   this.renderEntireTree(this._state);
  //   this._state.profilePage.newPostText = "";
  // },

  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this.renderEntireTree(this._state);
  // },

  // sendMessage() {
  //   let message = {
  //     userName: "АааАа", //////// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //     messageText: this._state.dialogsPage.newMessageText,
  //   };
  //   this._state.dialogsPage.dialogsMessagesData.push(message);
  //   this.renderEntireTree(this._state);
  //   this._state.dialogsPage.newMessageText = "";
  // },

  // updateNewMessageText(newText) {
  //   this._state.dialogsPage.newMessageText = newText;
  //   this.renderEntireTree(this._state);
  // },

  dispatch(action) {

    if (action.type === addPostActionType) {
      let newPost = {
        text: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsListData.push(newPost);
      this.renderEntireTree(this._state);
      this._state.profilePage.newPostText = "";
    }

    else if (action.type === updateNewPostTextActionType) {
      this._state.profilePage.newPostText = action.newText;
      this.renderEntireTree(this._state);
    }

    else if (action.type === sendMessageActionType) {
      let message = {
        userName: "АааАа", //////// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        messageText: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.dialogsMessagesData.push(message);
      this.renderEntireTree(this._state);
      this._state.dialogsPage.newMessageText = "";
    }

    else if (action.type === updateNewMessageTextActionType) {
      this._state.dialogsPage.newMessageText = action.newText;
      this.renderEntireTree(this._state);
    }

  }

};

window.store = store;

export default store;
