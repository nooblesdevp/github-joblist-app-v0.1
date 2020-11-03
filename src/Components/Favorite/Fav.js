import React from "react";
import { motion } from "framer-motion";
import Login from "../Login/Login";
import { useStateValue } from "../../context/Provider";
import SaveJob from "../SaveJob/SaveJob";

function Fav() {
  const [{ user, jobs }, dispatch] = useStateValue();
  console.log("dari fav", jobs);

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
    <motion.div
      className="fav"
      variants={project_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <img
      className="fav__img"
      src="https://previews.123rf.com/images/artrosestudio/artrosestudio1612/artrosestudio161200052/69667474-modern-flat-editable-line-design-vector-illustration-concept-of-error-404-page-not-found-icon-for-gr.jpg"
      alt=""
    /> */}
      <h1>yoo</h1>
      {jobs.map((job) => (
        <SaveJob
          image={job.company_logo}
          company={job.company}
          title={job.title}
          location={job.location}
          desc={job.description}
          date={job.create_at}
          type={job.type}
        />
      ))}
    </motion.div>
  );
}

export default Fav;
