import React, { useState } from "react";

import { Modal } from "react-bootstrap";
import MapLocation from "../Map/Map";
import "./ModalJob.scss";

function Modaljob({ company, title, location, desc, ...props }) {
  const [modalShow, setModalShow] = useState(false);
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
          <Modal.Title id="contained-modal-title-vcenter">
            {company}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{title}</h4>
          <p className="modalJob__desc">{desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modaljob;
