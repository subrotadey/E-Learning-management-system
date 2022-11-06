import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ShowMore from 'react-show-more-button/dist';

const Blog = ({ blog }) => {
    return (
        <Col className='teacher-card-style text-center mx-3 card-height'>
              <Card>
                <Card.Img variant="top" src={blog.img} className='img-trans'/>
                <Card.Body>
                  <Card.Title className='fw-bold'>{blog.heading}</Card.Title>
                  <Card.Text>
                    <ShowMore>
                      <p>
                      {blog.description}
                      </p>
                      </ShowMore>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
    );
};

export default Blog;