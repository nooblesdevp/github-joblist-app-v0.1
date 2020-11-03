import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import HeaderFav from "./Components/Favorite/HeaderFav";
import Fav from "./Components/Favorite/Fav";
import Progress from "./Components/Favorite/Progress";
import { useStateValue } from "./context/Provider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app ">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/myapp">
            {!user ? (
              <Login />
            ) : (
              <>
                <HeaderFav />
                <Fav />
              </>
            )}
          </Route>
          <Route path="/progress">
            {!user ? (
              <Login />
            ) : (
              <>
                <HeaderFav />
                <Progress />
              </>
            )}
          </Route>
          <Route path="/" exact>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
