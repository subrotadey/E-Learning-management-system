import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bg from '../../assets/images/bg1.svg'
import banner from '../../assets/images/banner.jpg'


const Banner = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${bg})` 
          }}>
            <Container>
              <Row className='rounded-4 m-4 d-flex align-items-center' >
                <Col sm={8}  xs={12} className='text-center'>
                    <h2 className='text-uppercase fw-bolder fs-1 opacity-75'>Transform Your Life Through Education</h2>
                    <h5>Learners around the world are launching new careers, <br /> advancing in their fields, <br /> and enriching their lives.</h5>
                </Col>
                <Col sm={4}  xs={12} className='text-center' ><img src={banner} alt="" className='w-75 m-3 rounded-4' /></Col>
              </Row>
            </Container>
        </div>
    );
};

export default Banner;