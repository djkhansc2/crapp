import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context";
import "./Register.css";

const Register = () => {
  const { setUserData } = useContext(authContext);
  const { setAuthUser } = useContext(authContext);
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    username: "",
    pass: "",
  });
  const [invalidPass, setInvalidPass] = useState(false);
  const history = useNavigate();

  const validateUserInfo = (e) => {
    e.preventDefault();
    // Prevent invalid characters (digits) in user information
    if (
      e.target[0].value.search(/\d+/) != -1 ||
      e.target[1].value.search(/\d+/) != -1 ||
      e.target[2].value.search(/\d+/) != -1
    ) {
      console.log("Digits are not allowed in user information");
      return;
    }
    if (e.target[3].value.search(/\d+/) == -1) {
      console.log("Password must contain at least one number");
      setInvalidPass(true);
      return;
    }
    console.log("Info valid");
    setUserData({
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      username: e.target[2].value,
      pass: e.target[3].value,
    });
    history("/");
  };

  return (
    <>
      <div className="register">Register</div>
      <form
        onSubmit={(e) => {
          validateUserInfo(e);
        }}
      >
        <p>First Name:</p>
        <input name="user" className="form-control" required />
        <p>Last Name:</p>
        <input name="user" className="form-control" required />
        <p>Username:</p>
        <input name="user" className="form-control" required />
        <p>Password:</p>
        <input name="pass" className="form-control" type="password" required />
        {invalidPass && (
          <p style={{ color: "red", fontSize: "20px" }}>
            Password must contain at least one number
          </p>
        )}
        <br />
        <button type="submit" className="btn btn-primary">
          <Link to="/dashboard">.</Link>Submit
        </button>
        &nbsp; &nbsp;
        <button className="btn btn-info">
          <Link to="/">Return</Link>
        </button>
      </form>
    </>
  );
};

export default Register;
