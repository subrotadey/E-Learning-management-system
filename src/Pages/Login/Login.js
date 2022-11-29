import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Login.css";
import login from "../../assets/images/login.jpg";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.init";
import { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then( () => {
      navigate(from, {replace: true})
    })
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState("");

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };

  const handleRegisterChange = (e) => {
    setRegistered(e.target.checked);
  };

  // for Email and password Authentication
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!/(?=.*?[0-9])/.test(password)) {
      setError("At least one digit");
      return;
    }
    setError("");

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          verifyEmail();
          setUserName();
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          setError(errorCode);
        });
    }
    setEmail("");
    setPassword("");
    e.target.reset();
    e.preventDefault();
  };

  // Update a user's profile
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("updating name");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email Verification send");
    });
  };

  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Email Send");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(errorCode);
      });
  };

  return (
    <section className="login py-5 bg-light">
      <Container>
        <Row className="row_div g-0">
          <div className="col-lg-5">
            <img src={login} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7 text-center py-5 txt_field">
            <h1 className="animate__animated animate__heartBeat animate__infinite">
              Please {registered ? "Login" : "Register"}
            </h1>
            <form onSubmit={handleFormSubmit}>
              {!registered && (
                <div className="form-row pt-5">
                  <div className="offset-1 col-lg-10">
                    <input
                      onBlur={handleNameBlur}
                      type="text"
                      className="inp px-3"
                      placeholder="Your name..."
                      required
                    />
                  </div>
                </div>
              )}
              <div className="form-row pt-4">
                <div className="offset-1 col-lg-10">
                  <input
                    onBlur={handleEmailBlur}
                    type="email"
                    className="inp px-3"
                    placeholder="Username or Email "
                    required
                  />
                </div>
              </div>
              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    onBlur={handlePasswordBlur}
                    type="password"
                    className="inp px-3"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-check w-50 mx-auto text-left mt-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    onChange={handleRegisterChange}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Already Registered
                  </label>
                </div>
                <div>
                  <small className="text-danger">{error}</small>
                </div>
                {/* <Link className=""></Link> */}
                <Button onClick={handleForgetPassword} variant="link">
                  Forget password?
                </Button>
              </div>

              <div className="row py-3">
                <div className="offset-1 col-lg-10">
                  <Button className="btn1" type="submit">
                    {registered ? "Login" : "Register"}
                  </Button>
                </div>
              </div>
            </form>
            <p>Or Login With</p>
            {/* {user.email ? (
              <button onClick={handleGoogleSignOut}>Google Sign Out</button>
            ) : ( */}
            <button className="text-center" onClick={handleGoogleSignIn}>
              <span>
                <i className="fab fa-google-plus"></i>
              </span>{" "}
              Google Sign In
            </button>
            {/* )} */}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
