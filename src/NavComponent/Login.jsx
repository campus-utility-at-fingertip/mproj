import "./Login.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@material-ui/core/Button";

function Login() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions
  });

  function registerClicked() {
    console.log(registrationFormStatus);
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    console.log(registrationFormStatus);
    setRegistartionFormStatus(false);
  }

  return (
    <div className="background_set">
      <div className="login-register-wrapper">
        <div className="nav-buttons">
          <Button className="button_login" onClick={loginClicked} id="loginBtn">
            <span
              style={{
                borderBottom: registrationFormStatus
                  ? "none"
                  : "2px solid black",
              }}
            >
              Login
            </span>
          </Button>
          <Button
            className="button_login"
            onClick={registerClicked}
            id="registerBtn"
          >
            <span
              style={{
                borderBottom: registrationFormStatus
                  ? "2px solid black"
                  : "none",
              }}
            >
              Register
            </span>
          </Button>
        </div>
        <div className="form-group">
          <animated.form action="" id="loginform" style={loginProps}>
            <LoginForm />
          </animated.form>
          <animated.form action="" id="registerform" style={registerProps}>
            <RegisterForm />
          </animated.form>
        </div>
        <animated.div className="forgot-panel" style={loginProps}>
          <Link to="#"className="forgatposs">Forgot your password</Link>
        </animated.div>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label for="username">USERNAME</label>
      <input type="text" id="username" />
      <label for="password">PASSWORD</label>
      <input type="text" id="password" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function RegisterForm() {
  return (
    <React.Fragment>
      <label for="fullname">full name</label>
      <input type="text" id="fullname" />
      <label for="email">email</label>
      <input type="text" id="email" />
      <label for="password">password</label>
      <input type="text" id="password" />
      <label for="confirmpassword">confirm password</label>
      <input type="text" id="confirmpassword" />
      <input type="submit" value="submit" class="submit" />
    </React.Fragment>
  );
}

export default Login;
