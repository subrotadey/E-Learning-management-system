import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import './Teacher.css'

const Teacher = ({ teach }) => {
    return (
        <>
            <Col className='teacher-card-style'>
              <Card>
                <Card.Img variant="top" src={teach.img} />
                <Card.Body>
                  <Card.Title className='fw-bold'>{teach.name}</Card.Title>
                  <Card.Text>
                    <small>{teach.designation}</small>
                  </Card.Text>
                </Card.Body>
                <div className='d-flex justify-content-center fs-1 my-3'>
                <BsFacebook></BsFacebook>
                <BsTwitter className='mx-4'></BsTwitter>
                <BsLinkedin></BsLinkedin>
                </div>
                <Card.Footer className='d-flex justify-content-center'>
                  <Button className="footer-btn" bg="warning" >View Details</Button>
                </Card.Footer>
              </Card>
            </Col>
        </>
    );
};

export default Teacher;