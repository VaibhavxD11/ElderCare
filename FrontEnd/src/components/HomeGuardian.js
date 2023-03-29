import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

const HomeGuardian = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const Categories = [
    { label: "Food", value: 1 },
    { label: "Medicine", value: 2 },
    { label: "Checkup", value: 3 },
    { label: "Phone Number", value: 4 },
    { label: "Excerise", value: 5 },
  ];

  const Med = () => {
    return (
      <>
        <div className="modal-wrapper" onClick={closeModal}></div>
        <div className="modal-container">
          <br></br>
          <h3>Details for Elder</h3>
          <form>
            <label>
              <span>Select Category</span>
              <Select options={Categories} />
            </label>
          </form>
          <div className="button-for-card">
            <button onClick={closeModal} className="modal-done-btn">
              Close
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row className="main-row-home-1 ">
          {/* //EMERGENCY contact number */}
          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="sos.jpg"
                alt="sos image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Med />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="med.jpg"
                alt="medicine image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Med />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="food.jpg"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Med />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="checkup.png"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Med />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="family.png"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Med />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="yoga.jpeg"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Med />}
            </center>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomeGuardian;
