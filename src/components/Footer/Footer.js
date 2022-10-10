import React from "react";
import { Card, Col, NavLink, Row } from "react-bootstrap";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
// import { BsFacebook } from 'react-icons/fa';
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
          <Row xs={1} md={2} xl={3} className="g-4">
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
                  <div className="d-flex justify-content-around">
                    <div style={{paddingTop:"50px"}}>
                      <h5>Follow us</h5>
                    </div>
                    <div>
                    <h2><a className="icon" href="https://www.facebook.com/subrota.dey540"><BsFacebook/></a></h2>
                    <h2><a className="icon" href="https://www.facebook.com/subrota.dey540"><BsTwitter/></a></h2>
                    <h2><a className="icon" href="https://www.facebook.com/subrota.dey540"><BsLinkedin/></a></h2>
                    </div>
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
                            <a href="/">Home</a>
                          </p>
                          <p>
                            <a href="/">Apartments</a>
                          </p>
                          <p>
                            <a href="/">Resorts</a>
                          </p>
                          <p>
                            <a href="/">Hostels</a>
                          </p>
                          <p>
                            <a href="/">Guest Houses</a>
                          </p>
                          <p>
                            <a href="/">Villas</a>
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
                    <button type="submit" class="btn btn-primary text-center">
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
                Lonely Planet Traveling Agency &copy; 2021 | All Rights
                Reserved
              </small>
            <p/>
              <small>Developed By Subrota@Dey</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
