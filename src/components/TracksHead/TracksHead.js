import React from "react";
import { Row, Col } from "../Tracks/styles";

const TracksHead = () => {
  return (
    <Row uppercase>
      <Col>
        <div></div>
      </Col>
      <Col>
        <div>Track Name</div>
        <div>Artist/Remixer</div>
      </Col>
      <Col>
        <div>Genre</div>
        <div>Time</div>
      </Col>
      <Col>
        <div>Key</div>
        <div>BPM</div>
      </Col>
      <Col>
        <div>Label</div>
        <div>Release Date</div>
      </Col>
      <Col>
        <div>Purchase Date</div>
      </Col>
    </Row>
  )
}

export default TracksHead;