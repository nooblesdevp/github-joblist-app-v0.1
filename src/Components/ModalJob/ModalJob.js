import React, { useEffect } from "react";

import { Modal } from "react-bootstrap";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../context/Provider";
import MapLocation from "../Map/Map";

import "./ModalJob.scss";

function Modaljob({ company, title, location, desc, ...props }) {
  const [{ user }, dispatch] = useStateValue();

  const history = useHistory;

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }

  const handleLike = () => {
    if (user !== null) {
      console.log("thanksyoo");
      dispatch({});
    } else {
      console.log("loginbruh");
    }
  };

  return (
    <div className="modalJob">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <MapLocation />
        <Modal.Header closeButton>
          <Modal.Title
            className="modalJob__header"
            id="contained-modal-title-vcenter"
          >
            {company}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{title}</h4>
          <p className="modalJob__descTitle ">
            {" "}
            <strong>Description</strong>{" "}
          </p>
          <p className="modalJob__desc ">{truncate(desc, 700)}</p>
        </Modal.Body>
        <Modal.Footer className=" modalJob__footer d-flex justify-content-between">
          <button onClick={handleLike}>
            <MdFavoriteBorder />
          </button>

          <button>
            <Link to="/login">{!user ? "Login" : "Logout"}</Link>
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modaljob;
