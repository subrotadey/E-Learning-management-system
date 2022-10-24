import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";


const WebHeader = () => {
    return (
        <div >
            <Navbar bg="primary" variant="dark" sticky="top" expand="sm" >
        <Container className=' text-light'>
        <Navbar.Collapse>
          <Nav>
            <p className=' my-auto'>"Think about your dream"</p>
          </Nav>
        </Navbar.Collapse>
        <Nav className='mx-4'>
            <p className='my-auto'><AiOutlinePhone className='fs-5'/>+880 1516358828</p>
        </Nav>
        <Navbar.Collapse>
          <Nav className='ms-auto'>
            <p className='my-auto'><IoLocationSharp className='fs-5'/>1675/A, O.R Nizam Road, Chittagong, Bangladesh</p>
            <p className='mx-5 my-auto'><BiTimeFive className='fs-5'/>Everyday 10.00am - 09.00pm</p>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default WebHeader;