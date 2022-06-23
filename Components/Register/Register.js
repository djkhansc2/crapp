import React, { useState, useRef } from "react";
import "./Register.css";

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    username: "",
    pass: "",
  });

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
      console.log("Password must contain only numbers");
      return;
    }
    console.log("Info valid");
    setUserCredentials({
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      username: e.target[2].value,
      pass: e.target[3].value,
    });
    console.log(userCredentials);
  };

  return (
    <>
      <div className="login">Register</div>
      <form
        onSubmit={(e) => {
          validateUserInfo(e);
        }}
      >
        <p>First Name:</p>
        <input name="user" />
        <p>Last Name:</p>
        <input name="user" />
        <p>Username:</p>
        <input name="user" />
        <p>Password:</p>
        <input name="pass" type="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Register;
