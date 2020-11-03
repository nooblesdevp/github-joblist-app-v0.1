import React from "react";
import { Card } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";

function SaveJob({ image, company, title, location, desc, date, type }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }
  return (
    <div>
      <Card>
        <Card.Header>
          <h4>{title}</h4>
          <span>{type}</span>
        </Card.Header>
        <Card.Body>
          <img className="cardJob__img" src={image} alt="" />
          <div className="cardJob__info">
            <div className="cardJob__infoHeader d-flex justify-content-between">
              <h5>{company}</h5>
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>

            <div className="cardJob__location mb-1">
              <MdLocationOn className="cardJob__locationIcon" />
              <span>{location}</span>
            </div>
            <p>{truncate(desc, 120)}</p>
            <button>remove</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SaveJob;
