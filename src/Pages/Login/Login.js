import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Login.css";
import login from "../../assets/images/login.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login py-5 bg-light">
      <Container>
        <Row className="row_div g-0">
          <div className="col-lg-5">
            <img src={login} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7 text-center py-5 txt_field">
            <h1 className="animate__animated animate__heartBeat animate__infinite">
              Welcome Back
            </h1>
            <form action="">
                <div className="form-row py-2 pt-5">
                    <div className="offset-1 col-lg-10">
                        <input type="text" className="inp px-3" placeholder="Username or Email " />
                    </div>
                </div>
                <div className="form-row py-3">
                    <div className="offset-1 col-lg-10">
                        <input type="password" className="inp px-3" placeholder="Password" />
                    </div>
                    <Link className="">forget password?</Link>
                </div>
                <div className="row py-3">
                    <div className="offset-1 col-lg-10">
                        <Button className="btn1">Sign Up</Button>
                    </div>
                </div>
            </form>
            <p>Or Login With</p>
            <span><i className="fab fa-facebook"></i></span>
            <span><i className="fab fa-google-plus"></i></span>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
