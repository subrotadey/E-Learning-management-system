import React from "react";
import { Card, Col, NavLink, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="top-footer text-white py-5 ">
          <h1>Be with Us</h1>
          <h3>
            Get healthy service, treatment and solutions to your problems from
            our experts!
          </h3>
        </div>
        <div className="footer text-light bg-dark pb-3 px-2">
          <Row xs={1} md={1} xl={3} className="g-4">
            <Col>
              <Card.Body>
                <Card.Title>
                  
                  <h3 className="center-item">Contact Information</h3>
                </Card.Title>
                <hr />
                <Card.Text className="center-item">
                  <p>1675/A, O.R Nizam Road Chittagong Bangladesh</p>
                  <p>
                    
                    <a href="/">http://www.LPlanet.com/</a>
                  </p>
                  <p>
                    
                    <a href="/">info@lonelyplanet.com</a>
                  </p>
                  <p>031-656565</p>
                  <div>
                    <i className="fab fa-facebook-f px-2 fs-4"></i>
                    <i className="fab fa-twitter px-4 fs-4"></i>
                    <i className="fab fa-instagram px-2 fs-4"></i>
                  </div>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>
                  
                  <h3 className="center-item">Services</h3>
                </Card.Title>
                <hr />
                <Card.Text>
                  <div className="d-flex justify-content-around">
                    <div>
                      <ul>
                        <ol>
                          <p>
                            <a href="/">Countries</a>
                          </p>
                          <p>
                            <a href="/">Religion</a>
                          </p>
                          <p>
                            <a href="/">Districts</a>
                          </p>
                          <p>
                            <a href="/">Airports</a>
                          </p>
                          <p>
                            <a href="/">Hotels</a>
                          </p>
                          <p>
                            <a href="/">Interested Places</a>
                          </p>
                        </ol>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <ol>
                          <p>
                            <NavLink to="/">Home</NavLink>
                          </p>
                          <p>
                            <NavLink to="/">Apartments</NavLink>
                          </p>
                          <p>
                            <NavLink to="/">Resorts</NavLink>
                          </p>
                          <p>
                            <NavLink to="/">Hostels</NavLink>
                          </p>
                          <p>
                            <NavLink to="/">Guest Houses</NavLink>
                          </p>
                          <p>
                            <NavLink to="/">Villas</NavLink>
                          </p>
                        </ol>
                      </ul>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>
                  <h3 className="center-item mx-auto">Contact Us</h3>
                </Card.Title>
                <hr />
                <Card.Text>
                <form className="p-3">
                  <div class="form-group">
                    <label className="p-2" for="exampleInputEmail1">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label className="p-2" for="exampleInputPassword1">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="p-4">
                    <button type="submit" class="btn btn-primary">
                      Subscribe Now
                    </button>
                  </div>
                </form>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <hr />
          <div className="center-item">
            <p>
              
              <small className="text-light">
                Lonely Planet Travelling Agency &copy; 2021 | All Rights
                Reserved
              </small>
            </p>
            <p>
              <small>Developed By Subrota@Dey</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
