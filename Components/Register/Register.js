import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context";
import "./Register.css";

const Register = () => {
  const { setUserData } = useContext(authContext);
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    username: "",
    pass: "",
  });
  const [invalidPass, setInvalidPass] = useState(false);
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
    console.log(userCredentials);
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
        <input name="user" required />
        <p>Last Name:</p>
        <input name="user" required />
        <p>Username:</p>
        <input name="user" required />
        <p>Password:</p>
        <input name="pass" type="password" required />
        {invalidPass && (
          <p style={{ color: "red", fontSize: "20px" }}>
            Password must contain at least one number
          </p>
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
      <button>
        <Link to="/">Return</Link>
      </button>
    </>
  );
};

export default Register;
