import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Course.css'

const Course = ({course}) => {

    return (
        <>
            <Col className='course-card-style'>
              <Card className='card-bg'>
                <Card.Img variant="top" src={course.img} />
                <Card.Body>
                  <Card.Title className='fw-bold'>{course.heading}</Card.Title>
                  <Card.Text>
                    <small>Price: ${course.price}</small>
                  </Card.Text>
                </Card.Body>
                  <Button className="course_btn" bg="warning" >View More</Button>
              </Card>
            </Col>
        </>
    );
};

export default Course;