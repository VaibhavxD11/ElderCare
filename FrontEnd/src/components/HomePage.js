import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./toast.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";



const HomePage = () => {


  const [Edata, setEData] = useState({
    id: window.useruid
  });

  useEffect(() => {
    handlePSubmit();
  }, [])

  



  const [Sosmodal, setSosmodal] = useState(false);
  const [Medmodal, setMedmodal] = useState(false);
  const [Foodmodal, setFoodmodal] = useState(false);
  const [Checkupmodal, setCheckupmodal] = useState(false);
  const [Familymodal, setFamilymodal] = useState(false);
  const [Yogamodal, setYogamodal] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const [count, setCount] = useState(0);


  const [pdata, setPData] = useState({
    point: 0,
    uid: window.useruid,
  });

  function handlePChange() {
    setPData({ ...pdata, point: count + 20 });
  }


  //Points API call



  const [perror, setPError] = useState("");
  const [result, setResult] = useState(0);

  const handlePSubmit = async (e) => {

    console.log(pdata);

    try {
      const url = "http://localhost:8080/points";
      const { data: res } = await axios.post(url, pdata);
      console.log(res.data.point);
      setCount(res.data.point);

    } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        // errText = (error.response.data.message)
        setPError(error.response.data.message);
        // console.log(errText);
      }
    }

  }



  const [m, setM] = useState(0);
  const [f, setF] = useState(0);
  const [c, setC] = useState(0);
  const [y, setY] = useState(0);
  const [n, setN] = useState(0);

  function handleButtonClick() {
    setSosmodal(!Sosmodal);
  }
  function handlemedButtonClick() {
    if (m == 0) {
      setCount(count + 10);
      handlePChange();
      setM(m + 1);
    }
    setMedmodal(!Medmodal);
  }
  function handlefoodButtonClick() {
    if (f == 0) {
      setCount(count + 10);
      handlePChange();
      setF(f + 1);
    }
    setFoodmodal(!Foodmodal);
  }
  function handlecheckButtonClick() {
    if (c == 0) {
      setCount(count + 10);
      handlePChange();
      setC(c + 1);
    }
    setCheckupmodal(!Checkupmodal);
  }
  function handlefamilyButtonClick() {
    if (n == 0) {
      setCount(count + 10);
      handlePChange();
      setN(n + 1);
    }
    setFamilymodal(!Familymodal);
  }
  function handleyogaButtonClick() {
    if (y == 0) {
      setCount(count + 10);
      setY(y + 1);
    }
    handlePChange();
    handlePSubmit();
    setYogamodal(!Yogamodal);
  }

  // useEffect(() => {
  //   setPData({ ...pdata, point: count + 10 });
  //   if (count == 50) {
  //     handlePSubmit();
  //   }
  // }, [count]);




  useEffect(() => {
    toast.success('Login Success !', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      closeOnClick: false,
      theme: "light",
      pauseOnHover: false,
    });
  }, []);




  // fetch Form Data

  const [yoga, setYoga] = useState([]);
  const [yloading, setYLoading] = useState(true);
  YogaForm();

  function YogaForm() {

    useEffect(() => {
      const fetchYForm = async () => {
        try {
          console.log(Edata);
          const url = "http://localhost:8080/yform";
          const { data: res } = await axios.post(url, Edata);
          console.log(res[0]);
          setYoga(res);
          setYLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchYForm();
    }, [window.useruid]);

    if (yloading) {
      return <h1>loading</h1>;
    }

    if (!yoga) {
      return <div>User not found</div>;
    }

    // Yoga data

    window.yoganame = yoga.name;
    window.yDuration = yoga.duration;
    window.yTime = yoga.time;
    window.yLink = yoga.link;

    return (
      null
    );
  }


  // const yitems = yoga.map((item) => ({
  //   name: item.name,
  //   duration: item.duration,
  //   time: item.time,
  //   link : item.link
  // }));


  const [med, setMed] = useState([]);
  const [mloading, setMLoading] = useState(true);
  MedForm();

  function MedForm() {
    

    useEffect(() => {
      const fetchMForm = async () => {
        try {
          console.log(Edata);
          const url = "http://localhost:8080/mform";
          const { data: res } = await axios.post(url, Edata);
          console.log(res[0]);
          setMed(res);
          setMLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchMForm();
    }, [window.useruid]);

    if (mloading) {
      return <h1>loading</h1>;
    }

    if (!med) {
      return <div>User not found</div>;
    }

    // Medicine data

    window.medname = med.name;
    window.dose = med.dose;
    window.mBreakfast = med.breakfast;
    window.mLunch = med.lunch;
    window.mHighTea = med.higtea;
    window.mDinner = med.dinner;



    return (
      null
    );
  }

  // const mitems = med.map((item) => ({
  //   name: item.name,
  //   dose: item.dose,
  //   breakfast: item.breakfast,
  //   lunch: item.lunch,
  //   hightea: item.hightea,
  //   dinner: item.dinner
  // }));


  const [food, setFood] = useState([]);
  const [floading, setFLoading] = useState(true);
  FoodForm();

  function FoodForm() {
    

    useEffect(() => {
      const fetchFForm = async () => {
        try {
          console.log(Edata);
          const url = "http://localhost:8080/fform";
          const { data: res } = await axios.post(url, Edata);
          console.log(res[0]);
          setFood(res);
          setFLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchFForm();
    }, [window.useruid]);

    if (floading) {
      return <h1>loading</h1>;
    }

    if (!food) {
      return <div>User not found</div>;
    }

    // Food data


    window.fBreakfast = food.breakfast;
    window.fLunch = food.lunch;
    window.fHighTea = food.higtea;
    window.fDinner = food.dinner;



    return (
      null
    );
  }


  // const fitems = food.map((item) => ({
  //   breakfast: item.breakfast,
  //   lunch: item.lunch,
  //   hightea: item.hightea,
  //   dinner: item.dinner
  // }));



  const [checkup, setCheckup] = useState([]);
  const [cloading, setCLoading] = useState(true);
  CheckupForm();
  function CheckupForm() {
    
    useEffect(() => {
      const fetchCForm = async () => {
        try {
          console.log(Edata);
          const url = "http://localhost:8080/cform";
          const { data: res } = await axios.post(url, Edata);
          console.log(res);
          setCheckup(res);
          setCLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchCForm();
    }, [window.useruid]);

    if (cloading) {
      return <h1>loading</h1>;
    }

    if (!checkup) {
      return <div>User not found</div>;
    }

    // Checkup data


    window.checkupname = checkup.name;
    window.cplace = checkup.place;
    window.cdesc = checkup.description;




    return (
      null
    );
  }

  // const citems = checkup.map((item) => ({
  //   name: item.name,
  //   place: item.place,
  //   desc: item.description
  // }));


  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  const [num, setNum] = useState([]);
  const [nloading, setNLoading] = useState(true);
  NumForm();

  function NumForm() {

    useEffect(() => {
      const fetchNForm = async () => {
        try {
          console.log(Edata);
          const url = "http://localhost:8080/nform";
          const { data: res } = await axios.post(url, Edata);
          console.log(res[0]);
          setNum(res);
          setData(res);
          setNLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchNForm();
    }, [window.useruid]);

    if (nloading) {
      return <h1>loading</h1>;
    }

    if (!num) {
      return <div>User not found</div>;
    }

    // Number data


    window.numname = num.name;
    window.formnum = num.number;




    return (
      null
    );
  }


  //function calls

  YogaForm();
  MedForm();
  FoodForm();
  CheckupForm();
  NumForm();

  // const nitems = num.map((item) => ({
  //   name: item.name,
  //   number: item.number
  // }));



  


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Set the interval duration to 30 seconds (30000 milliseconds)
    return () => clearInterval(interval);
  }, [data]);





  // useEffect(() => {
  //   if (todayDate.getTime - oldtime) {
  //     handlePSubmit();
  //   }
  // })






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


  return (
    <>

      <div>
        <ToastContainer />
      </div>
      <Navbar />


      <Container fluid>
        <Row className="main-row-home-1 ">
          {/* //EMERGENCY contact number */}

          <div className="main-points">
            <img src="coin.jpg" className="points-vector"></img>
            <div> = {count}</div>
          </div>
          <br></br>

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

                <br></br>


                <div className="modal-wrapper"></div>
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
                className="tick-button"
                onClick={handleButtonClick}
              >
                <img src="tick.png" id="tick"></img>
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

                <div className="modal-wrapper"></div>
                <div className="modal-container">
                  <br></br>
                  <div style={{ overflowY:'scroll', height:'250px'}}>
                    <table id="customers">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Time</th>
                          <th>Points</th>
                          <th>Link</th>
                          <th>Link</th>
                          <th>Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {med.map((item, index) => (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.dose}</td>
                            <td>{item.breakfast}</td>
                            <td>{item.lunch}</td>
                            <td>{item.hightea}</td>
                            <td>{item.dinner}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                </div>

              </ModalBody>


              <button
                type="button"
                className="tick-button"
                onClick={handlemedButtonClick}
              >
                <img src="tick.png" id="tick"></img>
              </button>
              <br></br>
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
              <div className="modal-wrapper"></div>
                <div className="modal-container">
                  <br></br>
                  <div style={{ overflowY: 'scroll', height: '250px' }}>
                    <table id="customers">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Time</th>
                          <th>Points</th>
                          <th>Link</th>
                          <th>Link</th>
                          <th>Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {food.map((item, index) => (
                          <tr key={index}>
                            <td>{item.breakfast}</td>
                            <td>{item.lunch}</td>
                            <td>{item.hightea}</td>
                            <td>{item.dinner}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                </div>
              </ModalBody>
              <button
                type="button"
                className="tick-button"
                onClick={handlefoodButtonClick}
              >
                <img src="tick.png" id="tick"></img>
              </button>
              <br></br>
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


              <div className="modal-wrapper"></div>
                <div className="modal-container">
                  <br></br>
                  <div style={{ overflowY: 'scroll', height: '250px' }}>
                    <table id="customers">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Time</th>
                          <th>Points</th>
                          <th>Link</th>
                          <th>Link</th>
                          <th>Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {checkup.map((item, index) => (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.place}</td>
                            <td>{item.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <br></br>

                </div>
              </ModalBody>
              <button
                type="button"
                className="tick-button"
                onClick={handlecheckButtonClick}
              >
                <img src="tick.png" id="tick"></img>
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


              <div className="modal-wrapper"></div>
                <div className="modal-container">
                  <br></br>
                  <div style={{ overflowY: 'scroll', height: '250px' }}>
                    <table id="customers">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Time</th>
                          <th>Points</th>
                          <th>Link</th>
                          <th>Link</th>
                          <th>Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {num.map((item, index) => (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.number}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <br></br>

                </div>
                {/* <h3>{data[currentIndex].name}</h3>
                <h3>{data[currentIndex].number}</h3> */}
              </ModalBody>
              <button
                type="button"
                className="tick-button"
                onClick={handlefamilyButtonClick}
              >
                <img src="tick.png" id="tick"></img>
              </button>
              <br></br>
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


              <div className="modal-wrapper"></div>
                <div className="modal-container">
                <br></br>
                  <table id="customers">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Points</th>
                        <th>Link</th>
                        <th>Link</th>
                        <th>Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yoga.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.time}</td>
                          <td>{item.duration}</td>
                          <td>{item.link}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br></br>
                </div>
              </ModalBody>
              <button
                type="button"
                className="tick-button"
                onClick={handleyogaButtonClick}
              >
                <img src="tick.png" id="tick"></img>
              </button>
              <br></br>
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
}


export default HomePage;
