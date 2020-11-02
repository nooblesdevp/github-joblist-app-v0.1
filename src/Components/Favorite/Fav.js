import React from "react";
import { motion } from "framer-motion";
import Login from "../Login/Login";
import { useStateValue } from "../../context/Provider";

function Fav() {
  const [{ user }, dispatch] = useStateValue();

  const project_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <motion.div
          className="fav"
          variants={project_variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <img
            className="fav__img"
            src="https://previews.123rf.com/images/artrosestudio/artrosestudio1612/artrosestudio161200052/69667474-modern-flat-editable-line-design-vector-illustration-concept-of-error-404-page-not-found-icon-for-gr.jpg"
            alt=""
          />
          <h1>yoo</h1>
        </motion.div>
      )}
    </>
  );
}

export default Fav;
