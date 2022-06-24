import React, { useState, useContext } from "react";
import { authContext } from "../../Context";

const Dashboard = () => {
  const { userData } = useContext(authContext);
  return <p>Welcome to Dashboard, {userData.firstName}!</p>;
};

export default Dashboard;
