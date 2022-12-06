import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "../../axios";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./SignIn.scss";
import { Usekey } from "../../common/keyboardInteraction/KeyboardPress";
import CustomizedSnackbars from "../../common/snackbar/SnackBar";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const cookies = new Cookies();
  const navigate = useNavigate();

  const validateInput = () => {
    let error = {};
    let formIsValid = true;

    if (email.length === 0) {
      formIsValid = false;
      error.email = "Email cannot be empty";
    } else {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        error.email = "Email is not Valid";
      }
    }
    setErrors(error);
    return formIsValid;
  };

  //for snackbar
  const [open, setOpen] = React.useState(false);

  //  const handleClick = () => {
  //    setOpen(true);
  //  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateInput()) {
      return;
    }
    const data = {
      email: email,
      password: password,
    };

    axios
      .post("/api/user/login", data)
      .then((res) => {
        if (res?.data?.success) {
          cookies.set("auth-token", res?.data?.user?.token, { path: "/" });
          navigate("/");
          setOpen(true);
        } else {
          console.log("error", res);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  //keyboard interaction
  Usekey("Enter", submitHandler);
  Usekey("NumpadEnter", submitHandler);

  return (
    <div className="signin">
      <div className="content">
        <form onSubmit={submitHandler}>
          <p className="chead">Sign In</p>
          <p className="signUp">
            Don't have an account? <a href="/sign-up">Sign up</a>
          </p>
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`email ${errors.email && "err"}`}
          />
          <span className="error">{errors.email}</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password"
          />
          <button className={`submitButton`} type="submit">
            Sign In
            <ArrowForwardIcon />
          </button>
        </form>
        <a href="/" className="forgot">
          Forgot password?
        </a>
      </div>
      <div className="allRight">
        All rights reserved by Koinpr Marketing Private Limited
      </div>
      {open ? (
        <CustomizedSnackbars
          open={open}
          handleClose={handleClose}
          msg={"You are loggedin successfully!"}
        />
      ) : null}
    </div>
  );
};

export default SignIn;
