import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
  const {img, price, heading} = props.course;
    return (
        <>
            <Col className='course-card-style'>
              <Card className='card-bg'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title className='fw-bold'>{heading}</Card.Title>
                  <Card.Text>
                    <small>Price: ${price}</small>
                  </Card.Text>
                </Card.Body>
                  <Card.Footer className='d-flex justify-content-center'>
                    <Button className="footer-btn w-100" bg="warning" >View More</Button>
                  </Card.Footer>
              </Card>
            </Col>
        </>
    );
};

export default Course;