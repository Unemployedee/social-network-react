const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                text: state.newPostText,
                likesCount: 0,
              };
              state.postsListData.push(newPost);
              state.newPostText = "";
              debugger;
              return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default: 
            return state;
    }
}

export default profileReducer;