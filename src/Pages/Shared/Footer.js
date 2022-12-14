import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_style">
        <div className="top-footer text-white py-5 " >
          <h1>Be with Us</h1>
          <h3>
          Leading companies use the same courses to help employees keep their skills fresh.
          </h3>
        </div>
        <div className="footer text-light bg-dark pb-3 px-2" >
          <Row xs={1} md={2} xl={3} className="g-4">
            <Col>
              <Card.Body>
                <Card.Title>
                  
                  <h3 className="center-item">Contact Information</h3>
                </Card.Title>
                <hr />
                <Card.Text className="center-item">
                  <p>1675/A, O.R Nizam Road, Chittagong, Bangladesh</p>
                  <p>
                    <a href="https://e-learning-management-system.netlify.app/">E-Learning System</a>
                  </p>
                  <p>
                    <a href="/">info@e.learning.com</a>
                  </p>
                  <p>+880 1516 ******</p>
                  <div className="d-flex justify-content-evenly mt-5">
                    <div className="d-flex align-items-center">
                      <h5>Follow us</h5>
                    </div>
                    <div className="d-flex follow">
                    <h2 className="mx-3"><a className="icon" href="https://www.facebook.com/subrota.dey540"><BsFacebook/></a></h2>
                    <h2 className="mx-3"><a className="icon" href="https://www.facebook.com/subrota.dey540"><BsTwitter/></a></h2>
                    <h2 className="mx-3"><a className="icon" href="https://www.facebook.com/subrota.dey540"><FaLinkedinIn/></a></h2>
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
                  <div className="d-flex justify-content-evenly">
                    <div>
                      <ul>
                        <ol>
                          <p>
                            <a href="/">home</a>
                          </p>
                          <p>
                            <a href="/">blog</a>
                          </p>
                          <p>
                            <a href="/">facebook</a>
                          </p>
                          <p>
                            <a href="/">twitter</a>
                          </p>
                          <p>
                            <a href="/">Instagram</a>
                          </p>
                          <p>
                            <a href="/">About us</a>
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
                            <a href="/">Popular course</a>
                          </p>
                          <p>
                            <a href="/">Best Buy seller</a>
                          </p>
                          <p>
                            <a href="/">Programming</a>
                          </p>
                          <p>
                            <a href="/">Web Development</a>
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
                  <div className="form-group text-white" >
                    <label className="p-2" htmlFor="exampleInputEmail1">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="py-4">
                    <button type="submit" className="btn btn-primary text-center">
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
                E-Learning Management System &copy; 2022 | All Rights
                Reserved
              </small>
              <br />
              <small>Developed By EDULOGY</small>
            </p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
