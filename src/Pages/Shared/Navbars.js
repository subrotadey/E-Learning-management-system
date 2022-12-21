import React from "react";
import logo from '../../assets/images/logo.png'
import './Footer.css'
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
// import { getAuth } from "firebase/auth";
// import app from "../../firebase.init";
import auth from "../../firebase.init";

// const auth =getAuth(app);
const Navbars = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
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
              
            </Link>
            <Link className="nav-link" to="/teachers">Teachers</Link>
            {/* <Link className="nav-link" to="/review">Review</Link> */}
            <Link className="nav-link" to="/blogs">Blogs</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/contact">My Classes</Link>
            {/* <Link className="nav-link" to="/dashboard">Dashboard</Link> */}
            {
              user && <Link className="nav-link" to="/dashboard">Dashboard</Link>
            }
            <span className="text-white my-auto mx-2">{user?.displayName && user.displayName}</span>
            <img style={{width: '40px'}} className="mx-2" src={user?.photoURL && user.photoURL} alt="" />
            {user?<Button onClick={() => signOut()}>Sign Out</Button>:<Link className="nav-link" to="/login">Login</Link>} 
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navbars;
