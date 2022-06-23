import React, {useState, useEffect} from "react";
import "./App.css";
import {Login}  from '../Login';
import {Register}  from '../Register';

const App = () => {
  return (
    <div className="app">
      <Register/>
      <br/>
      ------------------------------------ 
      <br/>
      <Login/>
    </div>
  );
};

export default App;