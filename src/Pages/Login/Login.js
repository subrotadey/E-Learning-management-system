import React from "react";
import "./Login.css";
import login from "../../assets/images/login.jpg";
import { Button, Container, Row } from "react-bootstrap";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { useEffect } from "react";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {register, formState: { errors }, handleSubmit, } = useForm();
  const [ signInWithEmailAndPassword, user, loading, error, ] = useSignInWithEmailAndPassword(auth);
  // const [updatePassword, updating, updateError] = useUpdatePassword(auth);
  
  let signInError;
  const location = useLocation();
  const navigate = useNavigate();
  let from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || gUser) {
      navigate(from, {replace: true});
    }
  }, [user, gUser, from, navigate])

  if(loading || gLoading ){
    return <Loading></Loading>
  }

  if(error || gError ){
    signInError = <p>{error?.message || gError?.message}</p>
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
    // updatePassword();
  }

  return (
    <section className="login py-5 bg-light">
      <Container>
        <Row className="row_div g-0">
          <div className="col-lg-5">
            <img src={login} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7 text-center py-5 txt_field">
            <h1 className="animate__animated animate__heartBeat animate__infinite">
              Login
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row pt-5">
                <div className="offset-1 col-lg-10">
                  <input
                    className="inp px-3"
                    placeholder="Enter Your Email..."
                    {...register("email", {
                      required: {
                        value: true,
                        message: 'Email is required'

                      },
                      pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Provide a valid Email",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email?.type === "required" && (<p role="alert">{errors.email?.message}</p>)}
                  {errors.email?.type === "pattern" && (<p role="alert">{errors.email?.message}</p>)}
                </div>
              </div>
              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    className="inp px-3"
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required"
                      },
                      minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer'
                      }
                    })}
                    aria-invalid={errors.mail ? "true" : "false"}
                  />
                  {errors.password?.type === "required" && (<p role="alert">{errors.password?.message}</p>)}
                  {errors.password?.type === "minLength" && (<p role="alert">{errors.password?.message}</p>)}
                </div>
              </div>
              <div className="row py-3">
                <div className="offset-1 col-lg-10">
                  <small className="text-danger">{signInError}</small>
                  <input
                    type="submit"
                    className="btn1 text-center fw-bold text-white"
                    value="Login"
                  />
                </div>
              </div>
            </form>
            {/* <Link></Link> */}
            <p><small>New to Edulogy? <Link to="/signup" >Create New Account</Link></small></p>
            <hr className="w-50 mx-auto bolder" />
            <p>Or</p>
            <Button
              variant="outline-info"
              className="text-center fw-bold"
              onClick={() => signInWithGoogle()}
            >
              Continue With Google
            </Button>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Login;


/*


  // const from = location?.state?.from?.pathname || "/";

  // const handleGoogleSignIn = () => {
  //   signInWithGoogle().then(() => {
  //     navigate(from, { replace: true });
  //   });
  // };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [registered, setRegistered] = useState(false);
  // const [name, setName] = useState("");

  // const handleNameBlur = (e) => {
  //   setName(e.target.value);
  // };

  // const handleRegisterChange = (e) => {
  //   setRegistered(e.target.checked);
  // };

  // // for Email and password Authentication
  // const handleEmailBlur = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlePasswordBlur = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   if (!/(?=.*?[0-9])/.test(password)) {
  //     setError("At least one digit");
  //     return;
  //   }
  //   setError("");

  //   if (registered) {
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((result) => {
  //         const user = result.user;
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setError(error.message);
  //       });
  //   } else {
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((result) => {
  //         const user = result.user;
  //         console.log(user);
  //         verifyEmail();
  //         setUserName();
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         console.log(errorCode);
  //         setError(errorCode);
  //       });
  //   }
  //   setEmail("");
  //   setPassword("");
  //   e.target.reset();
  //   e.preventDefault();
  // };

  // Update a user's profile
  // const setUserName = () => {
  //   updateProfile(auth.currentUser, {
  //     displayName: name,
  //   })
  //     .then(() => {
  //       console.log("updating name");
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };
  // const verifyEmail = () => {
  //   sendEmailVerification(auth.currentUser).then(() => {
  //     console.log("Email Verification send");
  //   });
  // };

  // const handleForgetPassword = () => {
  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       console.log("Email Send");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       // const errorMessage = error.message;
  //       console.log(errorCode);
  //     });
  // };

*/