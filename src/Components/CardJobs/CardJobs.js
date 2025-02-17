import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import ModalJob from "../ModalJob/ModalJob";
import "./CardJobs.scss";

function CardJobs({ job }) {
  const [modalShow, setModalShow] = useState(false);
  const regex = /(<([^>]+)>)/gi;

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }
  return (
    <div>
      <Card className="my-2 mx-2">
        <Card.Header className="cardJob__header d-flex justify-content-between  ">
          <h4>{job.title}</h4>
          <span>{job.type}</span>
        </Card.Header>
        <Card.Body className="d-flex">
          <img className="cardJob__img" src={job.company_logo} alt="" />
          <div className="cardJob__info">
            <div className="cardJob__infoHeader d-flex justify-content-between">
              <h5>{job.company}</h5>
              <span>{new Date(job.created_at).toLocaleDateString()}</span>
            </div>

            <div className="cardJob__location mb-1">
              <MdLocationOn className="cardJob__locationIcon" />
              <span>{job.location}</span>
            </div>
            <p>{truncate(job.description, 120).replace(regex, "")}</p>
            <button onClick={() => setModalShow(!modalShow)}>read more</button>
          </div>
          <ModalJob
            company={job.company}
            title={job.title}
            location={job.location}
            desc={job.description.replace(regex, "")}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardJobs;
