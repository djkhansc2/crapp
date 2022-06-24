import React, { useState, useContext } from "react";
import { authContext } from "../../Context";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { userData } = useContext(authContext);
  const [accessFail, setAccessFail] = useState(false);
  const verifyAccess = (e) => {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;
    if (username === '' || password == '') {
        console.log('Empty fields');
        setAccessFail(true);
        return;
    }
    if (userData.username !== username || userData.pass !== password) {
      setAccessFail(true);
      console.log("Invalid credentials");
      return;
    }
    console.log("Access granted!");
  };

  return (
    <>
      <div className="login">Login</div>
      <form
        onSubmit={(e) => {
          verifyAccess(e);
        }}
      >
        <p>Username:</p>
        <input name="user" />
        <p>Password:</p>
        <input name="pass" type="password" />
        <br />
        <button
          type="submit"
          style={{ backgroundColor: "green", borderRadius: "15%" }}
        >
          Submit
        </button>
      </form>
      <nav style={{ fontSize: "30px" }}>
        <Link to="/register">Register</Link>
      </nav>
      {accessFail && (
        <p style={{ color: "red", fontSize: "20px" }}>Invalid Credentials!</p>
      )}
    </>
  );
};

export default Login;
