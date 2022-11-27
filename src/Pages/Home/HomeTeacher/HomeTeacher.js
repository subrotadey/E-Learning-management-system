import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import './HomeTeacher.css'

const HomeTeacher = (props) => {

  const { img_link, first_name,last_name, designation} = props.teach;

    return (
        
            <Col className='teacher-card-style text-center mx-3 card-height'>
              <Card>
                <Card.Img variant="top" src={img_link} className='img-trans'/>
                <div className='d-flex justify-content-around fs-1 ico-style m-4'>
                <BsFacebook></BsFacebook>
                <BsTwitter></BsTwitter>
                <BsLinkedin></BsLinkedin>
                </div>
                <Card.Body>
                  <Card.Title className='fw-bold'>{first_name} {last_name}</Card.Title>
                  <Card.Text>
                    <small>{designation}</small>
                  </Card.Text>
                </Card.Body>
                
              </Card>
            </Col>
        
    );
};

export default HomeTeacher;