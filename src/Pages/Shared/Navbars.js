import React from "react";
import logo from '../../assets/images/logo.png'
import { Button, Container, Nav, Navbar } from "react-bootstrap";
// import {  NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css'
import useFirebase from "../../hooks/useFirebase";

const Navbars = () => {
  const {user, handleGoogleSignOut} = useFirebase();
  return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="md" collapseOnSelect className="nav_style">
        <Container className="">
        <Link className="nav-link" to="/">
          <Navbar.Brand><img src={logo} width="40px" height="40px" alt="" />EDULOGY</Navbar.Brand>
        </Link>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="ms-auto  text-uppercase">
            <Link className="nav-link" to="/courses">Courses
              {/* <NavDropdown title="Courses">
                <NavDropdown.Item href="#courses/c">C</NavDropdown.Item>
                <NavDropdown.Item href="#courses/c++">C++</NavDropdown.Item>
                <NavDropdown.Item href="#courses/java">JAVA</NavDropdown.Item>
                <NavDropdown.Item href="#courses/webdevelopment">Web Development</NavDropdown.Item>
                <NavDropdown.Item href="#courses/python">Python</NavDropdown.Item>
                <NavDropdown.Item href="#courses/mongo">MongoDB</NavDropdown.Item>
              </NavDropdown> */}
            </Link>
            <Link className="nav-link" to="/teachers">Teachers</Link>
            <Link className="nav-link" to="/review">Review</Link>
            <Link className="nav-link" to="/blogs">Blogs</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
            <span className="text-white my-auto">{user?.displayName && user.displayName}</span>
            <img style={{width: '40px'}} className="mx-2" src={user?.photoURL && user.photoURL} alt="" />
            {
              user?.uid 
              ? 
              <Button onClick={handleGoogleSignOut}>Sign Out</Button>
              :
              <Link className="nav-link" to="/login">Login</Link>
            } 
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navbars;
