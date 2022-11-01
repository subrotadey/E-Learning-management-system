import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import './Teacher.css'

const Teacher = ({ teach }) => {
    return (
        <>
            <Col className='teacher-card-style'>
              <Card className='card-bg'>
                <Card.Img variant="top" src={teach.img} />
                <div className='d-flex justify-content-around fs-1 i-style'>
                  <a href="www.facebook.com" className=''><BsFacebook className=''></BsFacebook></a>
                  <a href="www.twitter.com"><BsTwitter></BsTwitter></a>
                  <a href="www.linkedin.com"><BsLinkedin></BsLinkedin></a>
                </div>
                <Card.Body>
                  <Card.Title className='fw-bold'>{teach.name}</Card.Title>
                  <Card.Text>
                    <small>{teach.designation}</small>
                  </Card.Text>
                </Card.Body>
                
                <Card.Footer className='d-flex justify-content-center'>
                  <Button className="footer-btn" bg="warning" >View Details</Button>
                </Card.Footer>
              </Card>
            </Col>
        </>
    );
};

export default Teacher;