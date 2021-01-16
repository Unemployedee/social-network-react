import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/reduxStore"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import ReactDOM from "react-dom"

let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
        <App
        state = {store.getState()} 
        dispatch = {store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
        );
}

store.subscribe(renderEntireTree);

renderEntireTree(store.getState());

reportWebVitals();
