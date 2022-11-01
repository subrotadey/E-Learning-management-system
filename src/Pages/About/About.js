import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className='breadcrumb-style'>
                <Container className='py-2'>
                <h1 className='px-0'>Our  Teachers</h1>
                <Breadcrumb>
                  <Breadcrumb.Item><Link className='text-white' to="/">Home</Link></Breadcrumb.Item>
                  <Breadcrumb.Item active>Teachers</Breadcrumb.Item>
                </Breadcrumb>
                </Container>
            </div>
            <Container>
                
            </Container>
        </div>
    );
};

export default About;