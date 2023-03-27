import "./App.css";
import { Redirect, Route, Routes, Switch } from "react-router-dom";
import UserComponent from "./Components/UserComponent";
import AddUser from "./Components/AddUser";
import UserDetails from "./Components/UserDetails";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <UserComponent />
        </Route>
        <Route path="/add/user">
          <AddUser />
        </Route>
        <Route path="/user/:id">
          <UserDetails />
        </Route>
        <Route path="/edit/:id">
          <EditUser/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
