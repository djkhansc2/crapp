import React, { useState, useEffect } from "react";
import "./App.css";
import { Login } from "../Login";
import { Register } from "../Register";
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import { authContext } from "../../Context";

const App = () => {
  const [routes, setRoutes] = useState([]);
  const [authUser, setAuthUser] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    pass: "",
  });
  const PUBLIC_ROUTES = [
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
  ];

  const PRIVATE_ROUTES = [{ path: "/dashboard" }];

  useEffect(() => {
    if (authUser) {
      setRoutes(PRIVATE_ROUTES);
    } else {
      setRoutes(PUBLIC_ROUTES);
    }
  }, [authUser]);

  // //ANTES DE QUE EL COMPONENTE DEJE DE EXISTIR
  // useEffect(() => {
  //   return () => {
  //     //LLAMADO A FUNCIONES O ELIMINAR DATOS DE CONTEXT
  //   }
  // }, [])

  const AppRoutes = () => useRoutes(routes);

  return (
    <div className="app">
      <authContext.Provider value={{ userData, setUserData }}>
        <AppRoutes />
      </authContext.Provider>
    </div>
  );
};

export default App;
