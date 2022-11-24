import React from 'react';
import {Card, Col } from 'react-bootstrap';

const HomeReview = ({ review }) => {
    return (
        <Col className='teacher-card-style m-3 text-center'>
              <Card className='image_wrapper'>
                <Card.Img variant="top" src={review.img} className="img_size" />
                <Card.Body>
                  <Card.Title>{review.name}</Card.Title>
                  <Card.Text  className='text-wrap'>
                    <small>{review.description}</small>
                  </Card.Text>
                </Card.Body>
                
                <Card.Footer className='d-flex justify-content-center'>
                    <small>{review.date}</small>
                </Card.Footer>
              </Card>
            </Col>
    );
};

export default HomeReview;