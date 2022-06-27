import React, { useState, useContext } from "react";
import { authContext } from "../../Context";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { userData } = useContext(authContext);
  const { setAuthUser } = useContext(authContext);
  const [accessFail, setAccessFail] = useState(false);

  const verifyAccess = (e) => {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;
    if (username === "" || password == "") {
      console.log("Empty fields");
      setAccessFail(true);
      return;
    }
    if (userData.username !== username || userData.pass !== password) {
      setAccessFail(true);
      console.log("Invalid credentials");
      return;
    }
    setAuthUser(true);
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
        <input name="user" className="form-control" />
        <p>Password:</p>
        <input name="pass" type="password" className="form-control" />
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        &nbsp; &nbsp;
        <button className="btn btn-secondary">
          <Link to="/register">Register</Link>
        </button>
      </form>

      {accessFail && (
        <p style={{ color: "red", fontSize: "20px" }}>Invalid Credentials!</p>
      )}
    </>
  );
};

export default Login;
