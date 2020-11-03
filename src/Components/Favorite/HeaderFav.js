import React from "react";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../../context/Provider";
import Login from "../Login/Login";
import "./Favorite.scss";

function HeaderFav() {
  const [{ user }, dispatch] = useStateValue();
  console.log("user", user);
  return (
    <div className="myApp__header">
      <div className="myApp__container">
        <h1>My Applications</h1>
        <div className="myApp__navbar">
          <NavLink to="/myapp" activeClassName="active">
            Favorite
          </NavLink>
          <NavLink to="/progress" activeClassName="active">
            In-Progress
          </NavLink>
        </div>
        <div className="myApp__body"></div>
      </div>
    </div>
  );
}

export default HeaderFav;
