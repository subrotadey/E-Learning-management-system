import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Login.css";
import login from "../../assets/images/login.jpg";
import {
    useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const SignUp = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {register,formState: { errors }, handleSubmit,} = useForm();
  const [ createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
  const navigate = useNavigate();

  const [token] = useToken(user || gUser);

  let signInError;

  if (loading || gLoading || updating || sending) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError || verificationError) {
    signInError = <p className="text-danger">{error?.message || gError?.message || gError?.message}</p>;
  }

  // if (user || gUser ) {
    // console.log(user || gUser);

  if (token) {
    navigate('/courseDetails');
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name,});
    await sendEmailVerification(auth.currentUser);
    // console.log("update done");
    
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
              Sign Up
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    className="inp px-3"
                    type="text"
                    placeholder="Enter Your Name..."
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      }
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-danger" role="alert">{errors.name?.message}</p>
                  )}
                </div>
              </div>
              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    className="inp px-3"
                    placeholder="Enter Your Email..."
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Provide a valid Email",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-danger" role="alert">{errors.email?.message}</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p className="text-danger" role="alert">{errors.email?.message}</p>
                  )}
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
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                    aria-invalid={errors.mail ? "true" : "false"}
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-danger" role="alert">{errors.password?.message}</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-danger" role="alert">{errors.password?.message}</p>
                  )}
                </div>
              </div>
              <div className="row py-3">
                <div className="offset-1 col-lg-10">
                  <small className="text-danger">{signInError}</small>
                  <input
                    type="submit"
                    className="btn1 text-center fw-bold text-white"
                    value="Sign Up"
                  />
                </div>
              </div>
            </form>
            <p>
              <small>
                Already have an account? <Link to="/login">Please Login</Link>
              </small>
            </p>
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

export default SignUp;
