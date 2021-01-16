import dialogsReduser from "./dialogsReducer";
import profileReducer from "./profileReducer";

const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReduser
    });

let store = createStore(reducers);


export default store;