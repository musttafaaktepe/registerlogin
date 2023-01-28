import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const PrivateRouter = () => {
  const loginInformation = useSelector((state) => state.loginInfos);
  console.log(loginInformation)
  return <>{loginInformation.loginInformation ? <Outlet /> : <Navigate to="/" />}</>;
  
};

export default PrivateRouter;
