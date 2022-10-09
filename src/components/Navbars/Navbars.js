import React from "react";
// import logo from '../../../public/logo192.png'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navbars = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        {/* <Navbar.Brand>
          <img src={logo} width="40px" height="40px" /> Logo
        </Navbar.Brand> */}

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Courses">
              <NavDropdown.Item href="#courses/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#courses/coffee">
                Coffee
              </NavDropdown.Item>
              <NavDropdown.Item href="#courses/chocolate">
                Chocolate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#courses/promo">Promo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbars;
