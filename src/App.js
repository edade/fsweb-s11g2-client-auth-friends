import "./App.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import FriendsList from "./pages/FriendsList";
import AddFriend from "./pages/AddFriend";
import NavigationBar from "./pages/NavigationBar";
import PrivateRoute from "./pages/PrivateRoute";
import Friend from "./pages/Friend";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/friends">
            <FriendsList />
          </PrivateRoute>
          <PrivateRoute path="/friends/add">
            <AddFriend />
          </PrivateRoute>
          <PrivateRoute path="/friends/:friendID">
            <Friend />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
