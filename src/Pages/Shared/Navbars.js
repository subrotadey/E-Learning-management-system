import React from "react";
import logo from '../../assets/images/logo.png'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container className="">
        <Link className="nav-link" to="/">
          <Navbar.Brand><img src={logo} width="40px" height="40px" alt="" /> E-Learning</Navbar.Brand>
        </Link>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="ms-auto  text-uppercase">
            <NavDropdown title="Courses">
              <NavDropdown.Item href="#courses/c">C</NavDropdown.Item>
              <NavDropdown.Item href="#courses/c++">C++</NavDropdown.Item>
              <NavDropdown.Item href="#courses/java">JAVA</NavDropdown.Item>
              <NavDropdown.Item href="#courses/webdevelopment">Web Development</NavDropdown.Item>
              <NavDropdown.Item href="#courses/python">Python</NavDropdown.Item>
              <NavDropdown.Item href="#courses/mongo">MongoDB</NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link" to="/teachers">Teachers</Link>
            <Link className="nav-link" to="/review">Review</Link>
            <Link className="nav-link" to="/blog">Blog</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navbars;
