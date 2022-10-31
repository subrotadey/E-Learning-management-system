import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import './HomeTeacher.css'

const HomeTeacher = ({ teach }) => {
    return (
        
            <Col className='teacher-card-style text-center mx-3'>
              <Card>
                <Card.Img variant="top" src={teach.img} className='img-trans'/>
                <Card.Body>
                  <Card.Title className='fw-bold'>{teach.name}</Card.Title>
                  <Card.Text>
                    <small>{teach.designation}</small>
                  </Card.Text>
                </Card.Body>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                <div className='d-flex justify-content-around fs-1 ico-style'>
                <BsFacebook></BsFacebook>
                <BsTwitter></BsTwitter>
                <BsLinkedin></BsLinkedin>
                </div>
              </Card>
            </Col>
        
    );
};

export default HomeTeacher;