import React, { useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { DropdownButton, Dropdown } from "react-bootstrap";
import ReactDOM from "react-dom";

const HomeGuardian = () => {


  const imageprofile = () => {
      <DropdownButton title="Dropdown">
        <Dropdown.Item>Option 1</Dropdown.Item>
        <Dropdown.Item>Option 2</Dropdown.Item>
        <Dropdown.Item>Option 3</Dropdown.Item>
      </DropdownButton>
  }

  const [Sosmodal, setSosmodal] = useState(false);
  const [Medmodal, setMedmodal] = useState(false);
  const [Foodmodal, setFoodmodal] = useState(false);
  const [Checkupmodal, setCheckupmodal] = useState(false);
  const [Familymodal, setFamilymodal] = useState(false);
  const [Yogamodal, setYogamodal] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [isLunchChecked, setIsLunchChecked] = useState(false);
  const [isHighChecked, setIsHighChecked] = useState(false);
  const [isDinnerChecked, setIsDinnerChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleLunchCheckboxChange = (event) => {
    setIsLunchChecked(event.target.checked);
  };

  const handleHighCheckboxChange = (event) => {
    setIsHighChecked(event.target.checked);
  };

  const handleDinnerCheckboxChange = (event) => {
    setIsDinnerChecked(event.target.checked);
  };

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row className="main-row-home-1 ">
          {/* //EMERGENCY contact number */}

          <div>
            <img src="profile.png"
            alt = "profile"
            onClick={imageprofile}
            id="profileimage">
            </img>
          </div>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            {/* //this is the popup */}

            <Modal
              size="lg"
              isOpen={Sosmodal}
              toggle={() => setSosmodal(!Sosmodal)}
            >
              <ModalHeader toggle={() => setSosmodal(!Sosmodal)}>
                <h3 id="sostext">Emergency Contact Numbers</h3>
              </ModalHeader>
              <ModalBody>
                <div className="modal-container">
                  <br></br>
                  <table id="customers">
                    <tr>
                      <th>Medicine Name</th>
                      <th>Image</th>
                      <th>Time</th>
                      <th>Dose</th>
                    </tr>
                    <tr>
                      <td>knokgo</td>
                      <td>powekp</td>
                      <td>Jawpmfepipur</td>
                      <td>Jawpmfepipur</td>
                    </tr>
                    <tr>
                      <td>Ambulance</td>
                      <td>102</td>
                      <td>Jodhpur</td>
                      <td>Jodhpur</td>
                    </tr>
                    <tr>
                      <td>Doctor</td>
                      <td>8797988979</td>
                      <td>Delhi</td>
                      <td>Delhi</td>
                    </tr>
                    <tr>
                      <td>Fire / rescue</td>
                      <td>101</td>
                      <td>Andhra pradesh</td>
                      <td>Andhra pradesh</td>
                    </tr>
                  </table>
                  <br></br>
                </div>
              </ModalBody>
              <button
                type="button"
                className="close-button"
                onClick={() => setSosmodal(!Sosmodal)}
              >
                Close
              </button>
              <br></br>
            </Modal>

            <center>
              <img
                src="sos.jpg"
                alt="sos image"
                className="card-image img-fluid"
                onClick={() => setSosmodal(true)}
              ></img>
            </center>
          </Col>

          {/* this is the medicine logger */}
          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            {/* this is the popup for the medicine logger */}
            <Modal
              size="lg"
              isOpen={Medmodal}
              toggle={() => setMedmodal(!Medmodal)}
            >
              <ModalHeader toggle={() => setMedmodal(!Medmodal)}>
                <h3 id="sostext">Medicine logger</h3>
              </ModalHeader>
              <ModalBody>
                <form>
                  <div className="med-name-class">
                    <label id="med-label">Medicine Name</label>
                    <input type="text" id="med-input"></input>
                    <br></br>
                  </div>

                  <div className="dose-radio-button-class">
                    <label>Dose of the medicine</label>
                    <label>
                      <input
                        type="radio"
                        checked="checked"
                        name="radio"
                      ></input>
                      Full tablet
                    </label>
                    <label>
                      <input type="radio" name="radio"></input>
                      Half tablet
                    </label>
                  </div>

                  <div className="time-checkbox-button-class">
                    <label>Time of the medicine</label>
                    <label>
                      <input type="checkbox" name="radio"></input>
                      Breakfast
                    </label>
                    <label>
                      <input type="checkbox" name="radio"></input>
                      Lunch
                    </label>
                    <label>
                      <input type="checkbox" name="radio"></input>
                      High tea
                    </label>
                    <label>
                      <input type="checkbox" name="radio"></input>
                      Dinner
                    </label>
                  </div>

                  <br></br>

                  <div className="image-upload">
                    <input
                      type="file"
                      id="input"
                    ></input>

                    <br></br>

                    <button id="submit-button">
                      Upload image
                    </button>
                  </div>

                  <br></br>

                  <button
                    type="button"
                    className="close-button"
                    onClick={() => setMedmodal(!Medmodal)}
                  >
                    Publish
                  </button>
                </form>
              </ModalBody>
            </Modal>

            <center>
              <img
                src="med.jpg"
                alt="medicine image"
                className="card-image img-fluid"
                onClick={() => setMedmodal(true)}
              ></img>
            </center>
          </Col>

          {/* this is the food logger */}

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            {/* this is the modal for food logger */}
            <Modal
              size="lg"
              isOpen={Foodmodal}
              toggle={() => setFoodmodal(!Foodmodal)}
            >
              <ModalHeader toggle={() => setFoodmodal(!Foodmodal)}>
                <h3 id="sostext">Food logger</h3>
              </ModalHeader>
              <ModalBody>
                <form>
                  <div className="time-checkbox-button-class">
                    <label>Please tick mark</label>
                    <label>
                      <input
                        type="checkbox"
                        name="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      ></input>
                      Breakfast
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="checkbox"
                        checked={isLunchChecked}
                        onChange={handleLunchCheckboxChange}
                      ></input>
                      Lunch
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="checkbox"
                        checked={isHighChecked}
                        onChange={handleHighCheckboxChange}
                      ></input>
                      High tea
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="checkbox"
                        checked={isDinnerChecked}
                        onChange={handleDinnerCheckboxChange}
                      ></input>
                      Dinner
                    </label>
                  </div>

                  {isChecked && (
                    <div className="med-name-class">
                      <br></br>
                      <label id="med-label">Breakfast</label>
                      <input type="text" id="med-input"></input>
                      <br></br>
                    </div>
                  )}

                  {isLunchChecked && (
                    <div className="med-name-class">
                      <br></br>
                      <label id="med-label">Lunch</label>
                      <input type="text" id="med-input"></input>
                      <br></br>
                    </div>
                  )}

                  {isHighChecked && (
                    <div className="med-name-class">
                      <br></br>
                      <label id="med-label">High Tea</label>
                      <input type="text" id="med-input"></input>
                      <br></br>
                    </div>
                  )}

                  {isDinnerChecked && (
                    <div className="med-name-class">
                      <br></br>
                      <label id="med-label">Dinner</label>
                      <input type="text" id="med-input"></input>
                      <br></br>
                    </div>
                  )}

                  <br></br>
                  <button
                    type="button"
                    className="close-button"
                    onClick={() => setFoodmodal(!Foodmodal)}
                  >
                    Publish
                  </button>
                </form>
              </ModalBody>
            </Modal>
            <center>
              <img
                src="food.jpg"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setFoodmodal(true)}
              ></img>
            </center>
          </Col>

          {/* this is the checkup card */}
          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            {/* this is the modal for checkup */}
            <Modal
              size="lg"
              isOpen={Checkupmodal}
              toggle={() => setCheckupmodal(!Checkupmodal)}
            >
              <ModalHeader toggle={() => setCheckupmodal(!Checkupmodal)}>
                <h3 id="sostext">Checkup logger</h3>
              </ModalHeader>
              <ModalBody>
                <form>
                  <div className="med-name-class">
                    <label id="med-label">Name of checkup</label>
                    <input type="text" id="med-input"></input>
                    <br></br>
                  </div>

                  <div className="med-name-class">
                    <label id="med-label">place</label>
                    <input type="text" id="med-input"></input>
                    <br></br>
                  </div>

                  <div className="med-name-class">
                    <label id="med-label">description of the checkup</label>
                    <textarea type="text" id="med-input"></textarea>
                    <br></br>
                  </div>
                </form>
              </ModalBody>
              <button
                type="button"
                className="close-button"
                onClick={() => setCheckupmodal(!Checkupmodal)}
              >
                Publish
              </button>
              <br></br>
            </Modal>

            <center>
              <img
                src="checkup.png"
                alt="checkup image"
                className="card-image img-fluid"
                onClick={() => setCheckupmodal(true)}
              ></img>
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <Modal
              size="lg"
              isOpen={Familymodal}
              toggle={() => setFamilymodal(!Familymodal)}
            >
              <ModalHeader toggle={() => setFamilymodal(!Familymodal)}>
                <h3 id="sostext">Family logger</h3>
              </ModalHeader>
              <ModalBody>
                <form>
                  <div className="med-name-class">
                    <label id="med-label">Name</label>
                    <input type="text" id="med-input"></input>
                    <br></br>
                  </div>

                  <div className="med-name-class">
                    <label id="med-label">Mobile number</label>
                    <input type="number" id="med-input" minLength={10}></input>
                    <br></br>
                  </div>

                  <br></br>

                  <div className="image-upload">
                    <input
                      type="file"
                      id="input"
                    ></input>

                    <br></br>

                    <button  id="submit-button">
                      Upload image
                    </button>
                  </div>

                  

                  <br></br>

                  <button
                    type="button"
                    className="close-button"
                    onClick={() => setFamilymodal(!Familymodal)}
                  >
                    Publish
                  </button>
                </form>
              </ModalBody>
            </Modal>

            <center>
              <img
                src="family.png"
                alt="family image"
                className="card-image img-fluid"
                onClick={() => setFamilymodal(true)}
              ></img>
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <Modal
              size="lg"
              isOpen={Yogamodal}
              toggle={() => setYogamodal(!Yogamodal)}
            >
              <ModalHeader toggle={() => setYogamodal(!Yogamodal)}>
                <h3 id="sostext">Yoga logger</h3>
              </ModalHeader>
              <ModalBody>
                <form>
                  <div className="med-name-class">
                    <label id="med-label">Name</label>
                    <input type="text" id="med-input"></input>
                    <br></br>
                  </div>

                  <div className="med-name-class">
                    <label id="med-label">Duration</label>
                    <input type="text" id="med-input"></input>
                    <br></br>
                  </div>

                  <div className="med-name-class">
                    <label id="med-label">Time</label>
                    <input type="text" id="med-input"></input>
                    <br></br>
                  </div>

                  <div className="med-name-class">
                    <label for="url">Any Link for the exercise</label>
                    <input type="url" size="30" id="med-input" required></input>
                    <br></br>
                  </div>
                  <br></br>

                  <button
                    type="button"
                    className="close-button"
                    onClick={() => setYogamodal(false)}
                  >
                    Publish
                  </button>
                </form>
              </ModalBody>
            </Modal>

            <center>
              <img
                src="yoga.jpeg"
                alt="yoga image"
                className="card-image img-fluid"
                onClick={() => setYogamodal(true)}
              ></img>
            </center>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomeGuardian;
