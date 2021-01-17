import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header"
import Nav from "./components/navigation/navigation"
import Profile from "./components/userProfile/profile"
import Dialogs from "./components/dialogs/dialogs"


function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <div className = "mainContent">
          <Nav />
          <Route path = '/profile'>
          <Profile dispatch = {props.dispatch} state = {props.state}/>
          </Route>
          <Route path = '/Dialogs'>
          <Dialogs dispatch = {props.dispatch} state = {props.state.dialogsPage}/>
          </Route>
          {/* <Route path = '/Dialogs' render = { () => <Dialogs />}/> */}
      </div>
    </div>
  );
}

export default App;
