import React, { useState, useEffect } from "react";
import "./App.css";
import { Login } from "../Login";
import { Register } from "../Register";
import { Dashboard } from "../Dashboard";
import { Routes, Route, Link, useRoutes, useNavigate } from "react-router-dom";
import { authContext } from "../../Context";

const App = () => {
  const [routes, setRoutes] = useState([]);
  const [authUser, setAuthUser] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "Lando",
    lastName: "Lando",
    username: "Lando",
    pass: "12345",
  });
  const history = useNavigate()
  const PUBLIC_ROUTES = [
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
  ];

  // TODO: Change path '/register' to 'dashboard'
  const PRIVATE_ROUTES = [
    { path: "/", element: <Dashboard /> },
    { path: "/dashboard", element: <Dashboard /> },
  ];

  useEffect(() => {
    if (authUser) {
      setRoutes(PRIVATE_ROUTES);
      history('/dashboard')
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
      <authContext.Provider
        value={{ userData, setUserData, authUser, setAuthUser }}
      >
        <AppRoutes />
      </authContext.Provider>
    </div>
  );
};

export default App;
