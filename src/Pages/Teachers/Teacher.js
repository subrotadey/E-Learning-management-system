import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Teacher = ({ teach }) => {
    return (
        <>
            <Col>
              <Card>
                <Card.Img variant="top" src={teach.img} />
                <Card.Body>
                  <Card.Title className='fw-bold'>{teach.name}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </>
    );
};

export default Teacher;