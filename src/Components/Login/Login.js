import React from "react";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/Provider";
import { auth, provider } from "../../config/firebase";
import { ACTIONS } from "../../context/reducer";
import "./Login.scss";
import { useHistory } from "react-router-dom";
function Login() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: ACTIONS.SET_USER,
          payload: { user: res.user },
        });

        history.push("./myapp");
      })
      .catch((err) => alert(err.message));
  };
  const sidebar_variant = {
    hidden: {
      y: "-50vw",
    },
    visible: {
      y: 0,

      transition: {
        delay: 0.4,
        duration: 0.7,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
      className="login"
    >
      <img
        src="https://lh3.googleusercontent.com/6wXeJrI2mCvLDGlMzZVlcUkAecoopJYVoOeci3LOoWRuW_unD0XY-hblMZSgqpZ62Q"
        alt=""
      />
      <div className="login__btn">
        <h1>Sign in to Github JobsList</h1>
        <button onClick={signIn}>Sign in With Google</button>
      </div>
    </motion.div>
  );
}

export default Login;
