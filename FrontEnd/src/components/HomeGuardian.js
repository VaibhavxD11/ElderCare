import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import "./toast.css";
import "./HomePage.css";

import { Popover, Whisper, Button } from 'rsuite';
import { Dropdown } from 'rsuite';

const HomeGuardian = () => {


  useEffect(() => {
    toast.success('Login Success !', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      closeOnClick: false,
      theme: "light",
      pauseOnHover: false,
    });
  }, []);



  const [Gdata, setGData] = useState({
    email: window.useremail
  });


  function UserDetails() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const url = "http://localhost:8080/gUserDetails";
          const { data: res } = await axios.post(url, Gdata);
          setUser(res);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchUser();
    }, [window.useremail]);

    if (loading) {
      return null;
    }

    if (!user) {
      return <div>User not found</div>;
    }

    // profile data

    window.elderName = user.elderName;
    window.num = user.number;
    window.guardName = user.guardName;
    window.useruid = user.uid;

    return (
      null
    );
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
  const Categories = [
    { label: "Food", value: 1 },
    { label: "Medicine", value: 2 },
    { label: "Checkup", value: 3 },
    { label: "Phone Number", value: 4 },
    { label: "Exercise", value: 5 }
  ]


  useEffect(() => {
    if (!window.isLoggedIn) {
      window.location.replace('/login'); // Replace with your desired page URL
    }

  }, [window.isLoggedIn]);

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', onBackButtonEvent);

    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);
    };
  }, []);

  const onBackButtonEvent = (e) => {
    e.preventDefault();
    window.history.pushState(null, null, window.location.pathname);
  };

  window.signout = true;
  ;

  const handleDinnerCheckboxChange = (event) => {
    setIsDinnerChecked(event.target.checked);
  };


  return (
    <>
      <Navbar />
      <Container fluid>
        <Row className="main-row-home-1 ">
          {/* //EMERGENCY contact number */}





          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
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
                <button
                  type="button"
                  className="close-button"
                  onClick={() => setSosmodal(!Sosmodal)}
                >
                  Close
                </button>
                <br></br>
              </ModalBody>

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
                <form onSubmit={handleMSubmit}>
                  <div className="med-name-class">
                    <label id="med-label">Medicine Name</label>
                    <input type="text" id="med-input"
                      name="name"
                      value={mdata.name}
                      onChange={handleMChange}
                    ></input>
                    <br></br>
                  </div>

                  <div className="dose-radio-button-class">
                    <label>Dose of the medicine</label>
                    <label>
                      <input type="text" id="med-input"
                        name="dose"
                        value={mdata.dose}
                        onChange={handleMChange}
                      ></input>
                      {/* Full tablet */}
                    </label>
                  </div>

                  <div className="time-checkbox-button-class">
                    <label>Time of the medicine</label>
                    <label>
                      <input
                        type="checkbox"
                        name="breakfast"
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
                        name="dinner"
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
                      <input type="text" id="med-input"
                        name="breakfast"
                        value={mdata.breakfast}
                        onChange={handleMChange}
                      ></input>
                      <br></br>
                    </div>
                  )}

                  {isLunchChecked && (
                    <div className="med-name-class">
                      <br></br>
                      <label id="med-label">Lunch</label>
                      <input type="text" id="med-input"
                        name="lunch"
                        value={mdata.lunch}
                        onChange={handleMChange}
                      >

                      </input>
                      <br></br>
                    </div>
                  )}

                  {isHighChecked && (
                    <div className="med-name-class">
                      <br></br>
                      <label id="med-label">High Tea</label>
                      <input type="text" id="med-input"
                        name="hightea"
                        value={mdata.hightea}
                        onChange={handleMChange}
                      ></input>
                      <br></br>
                    </div>
                  )}

                  {isDinnerChecked && (
                    <div className="med-name-class">
                      <br></br>
                      <label id="med-label">Dinner</label>
                      <input type="text" id="med-input"
                        name="dinner"
                        value={mdata.dinner}
                        onChange={handleMChange}
                      ></input>
                      <br></br>
                    </div>
                  )}
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
                    onClick={handleMSubmit}
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
                <form onSubmit={handleFSubmit}>
                  <div className="time-checkbox-button-class">
                    <label>Please tick mark</label>
                    <label>
                      <input
                        type="checkbox"
                        name="breakfast"
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
                        name="dinner"
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
                      <input type="text" id="med-input"
                        name="breakfast"
                        value={fdata.breakfast}
                        onChange={handleFChange}
                      ></input>
                      <br></br>
                    </div>
                  )}

                  {isLunchChecked && (
                    <div className="med-name-class">
                      <br></br>
                      <label id="med-label">Lunch</label>
                      <input type="text" id="med-input"
                        name="lunch"
                        value={fdata.lunch}
                        onChange={handleFChange}
                      >

                      </input>
                      <br></br>
                    </div>
                  )}

                  {isHighChecked && (
                    <div className="med-name-class">
                      <br></br>
                      <label id="med-label">High Tea</label>
                      <input type="text" id="med-input"
                        name="hightea"
                        value={fdata.hightea}
                        onChange={handleFChange}
                      ></input>
                      <br></br>
                    </div>
                  )}

                  {isDinnerChecked && (
                    <div className="med-name-class">
                      <br></br>
                      <label id="med-label">Dinner</label>
                      <input type="text" id="med-input"
                        name="dinner"
                        value={fdata.dinner}
                        onChange={handleFChange}
                      ></input>
                      <br></br>
                    </div>
                  )}

                  <br></br>
                  <button
                    type="button"
                    className="close-button"
                    onClick={handleFSubmit}
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
                <form onSubmit={handleCSubmit}>
                  <div className="med-name-class">
                    <label id="med-label">Name of checkup</label>
                    <input type="text" id="med-input"
                      name="name"
                      value={cdata.name}
                      onChange={handleCChange}
                    ></input>
                    <br></br>
                  </div>

                  <div className="med-name-class">
                    <label id="med-label">place</label>
                    <input type="text" id="med-input"
                      name="place"
                      value={cdata.place}
                      onChange={handleCChange}
                    ></input>
                    <br></br>
                  </div>

                  <div className="med-name-class">
                    <label id="med-label">description of the checkup</label>
                    <input type="text" id="med-input"
                      name="description"
                      value={cdata.description}
                      onChange={handleCChange}
                    ></input>
                    <br></br>
                  </div>
                </form>
              </ModalBody>
              <button
                type="button"
                className="close-button"
                onClick={handleCSubmit}
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
                <form onSubmit={handlePSubmit}>
                  <div className="med-name-class">
                    <label id="med-label">Name</label>
                    <input type="text" id="med-input"
                      name="name"
                      value={pdata.name}
                      onChange={handlePChange}
                    ></input>
                    <br></br>
                  </div>

                  <div className="med-name-class">
                    <label id="med-label">Mobile number</label>
                    <input type="number" id="med-input"
                      name="number"
                      value={pdata.number}
                      onChange={handlePChange}
                      minLength={10}></input>
                    <br></br>
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
                    onClick={ handlePSubmit }
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
                <form onSubmit={handleYSubmit}>
                  <div className="med-name-class">
                    <label id="med-label">Name</label>
                    <input type="text" id="med-input"
                      name="name"
                    onChange={handleYChange}
                    value={ydata.name}
                    >

                    </input>
                    <br></br>
                  </div>

                  <div className="med-name-class">
                    <label id="med-label">Duration</label>
                    <input type="text" id="med-input"
                      name="duration"
                      onChange={handleYChange}
                      value={ydata.duration}
                    >

                    </input>
                    <br></br>
                  </div>

                  <div className="med-name-class">
                    <label id="med-label">Time</label>
                    <input type="text" id="med-input"
                      name="time"
                      onChange={handleYChange}
                      value={ydata.time}
                    >

                    </input>
                    <br></br>
                  </div>

                  <div className="med-name-class">
                    <label for="url">Any Link for the exercise</label>
                    <input type="url" size="30" id="med-input"
                      name="link"
                      onChange={handleYChange}
                      value={ydata.link}
                      required>
                      
                      </input>
                    <br></br>
                  </div>
                  <br></br>

                  <button
                    type="button"
                    className="close-button"
                    onClick={handleYSubmit}
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
