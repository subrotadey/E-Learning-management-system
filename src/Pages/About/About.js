import React from "react";
import { Accordion, Breadcrumb, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="breadcrumb-style">
        <Container className="py-2">
          <h1 className="px-0">Our Team</h1>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link className="text-white" to="/">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>about</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
      <div>
        <div className="mt-5 pt-5">
          <div className="m-3">
            
            <Col>
              <div className="text-center">
              <h3>Help center</h3>
                <h2>Welcome to help center</h2>
                <p>
                  Sign in to contact Customer Service, we're available 24 hours a
                  day
                </p>
              </div>
              <div className="d-flex justify-content-around">
                <div className="d-flex text-justify w-25 border p-2">
                  <small>
                    <i className="far fa-comments fs-1 mx-3"></i>
                  </small>
                  <div>
                    <h3>Live site</h3>
                    <p>
                      The fastest way to talk to one of our Customer Service
                      agents about your bookings.
                    </p>
                  </div>
                </div>
                <div className="d-flex text-justify w-25 border p-2">
                  <small>
                    <i className="fas fa-phone-volume  fs-1 mx-3"></i>
                  </small>
                  <div>
                    <h3>Call Now</h3>
                    <p>
                      The fastest way to talk to one of our Customer Service
                      agents about your bookings.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </div>
          <div className="mx-auto w-50 border my-4">
            <h3>Frequently asked question</h3>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Who is going to charge my credit card, and when?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Can I cancel my booking?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  If I need to cancel my booking, will I pay a fee?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
