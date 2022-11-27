import React from 'react';

const Register = () => {
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
              {!registered && <div className="form-row pt-5">
                <div className="offset-1 col-lg-10">
                  <input
                    onBlur={handleNameBlur}
                    type="text"
                    className="inp px-3"
                    placeholder="Your name..."
                    required
                  />
                </div>
              </div>}
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
                <Button onClick={handleForgetPassword} variant="link">Forget password?</Button>
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
            {user.email ? (
              <button onClick={handleGoogleSignOut}>Google Sign Out</button>
            ) : (
              <button className="text-center" onClick={handleGoogleSignIn}>
                <span>
                  <i className="fab fa-google-plus"></i>
                </span>{" "}
                Google Sign In
              </button>
            )}
            <h2>{user.displayName}</h2>
            <img src={user.photoURL} alt="" />
          </div>
        </Row>
      </Container>
    </section>
    );
};

export default Register;