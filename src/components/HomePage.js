import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./HomePage.css";

//ahan its here finally

const HomePage = () => {
  return (
      <>
          <Container fluid>
              <Row className="main-row-home-1 justify-md-content-center" >
                  <Col className="col-1" xs={12} sm={6}  md={6} lg={4}>
                      <center>
                          <Card className="card" style={{ width: '30rem', height: '35rem' }}>
                              <Card.Img variant="center" src="food.jpg" />
                              <Card.Body>
                                  <Card.Title>Food Logger</Card.Title>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the
                                      bulk of the card's content.
                                  </Card.Text>
                                  <Button className="card-btn" variant="primary">Go somewhere</Button>
                              </Card.Body>
                          </Card>
                      </center>
                  </Col>
                  <Col className="col-1" xs={12} sm={6} md={6} lg={4}>
                      <center>
                          <Card style={{ width: '30rem', height: '35rem' }}>
                              <Card.Img variant="center" src="food.jpg"/>
                              <Card.Body>
                                  <Card.Title>Medicine Logger</Card.Title>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the
                                      bulk of the card's content.
                                  </Card.Text>
                                  <Button className="card-btn" variant="primary">Go somewhere</Button>
                              </Card.Body>
                          </Card>
                      </center>
                  </Col>
                  <Col className="col-1" xs={12} sm={6} md={6} lg={4}>
                      <center>
                          <Card style={{ width: '30rem', height: '35rem' }}>
                              <Card.Img variant="center" src="food.jpg" />
                              <Card.Body>
                                  <Card.Title>Checkup Logger</Card.Title>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the
                                      bulk of the card's content.
                                  </Card.Text>
                                  <Button  className="card-btn" variant="primary">Go somewhere</Button>
                              </Card.Body>
                          </Card>
                      </center>
                  </Col>
                  <Col className="col-1" xs={12} sm={6} md={6} lg={4}>
                      <center>
                          <Card style={{ width: '30rem', height: '35rem' }}>
                              <Card.Img variant="center" src="food.jpg" />
                              <Card.Body>
                                  <Card.Title>Emergency Numbers</Card.Title>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the
                                      bulk of the card's content.
                                  </Card.Text>
                                  <Button className="card-btn" variant="primary">Go somewhere</Button>
                              </Card.Body>
                          </Card>
                      </center>
                  </Col>
                  <Col className="col-1" xs={12} sm={6} md={6} lg={4}>
                      <center>
                          <Card style={{ width: '30rem', height: '35rem' }}>
                              <Card.Img variant="center" src="food.jpg" />
                              <Card.Body>
                                  <Card.Title>Emergency Numbers</Card.Title>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the
                                      bulk of the card's content.
                                  </Card.Text>
                                  <Button className="card-btn" variant="primary">Go somewhere</Button>
                              </Card.Body>
                          </Card>
                      </center>
                  </Col>
                  {/* Hello There it is another card */}
                  <Col className="col-1" xs={12} sm={6} md={6} lg={4}>
                      <center>
                          <Card style={{ width: '30rem', height: '35rem' }}>
                              <Card.Img variant="center" src="food.jpg" />
                              <Card.Body>
                                  <Card.Title>Emergency Numbers</Card.Title>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the
                                      bulk of the card's content.
                                  </Card.Text>
                                  <Button className="card-btn" variant="primary">Go somewhere</Button>
                              </Card.Body>
                          </Card>
                      </center>
                  </Col>
              </Row>

            </Container>
        </>
    )
}

export default HomePage;
