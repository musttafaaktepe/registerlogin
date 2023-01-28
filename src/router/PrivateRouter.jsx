import React from 'react'
import { Navigate, Outlet } from 'react-router'
const PrivateRouter = () => {
    const loginInformation = true
  return (
    <>
    {loginInformation ? <Outlet/> : <Navigate to="/"/> }
    </>
  )
}

export default PrivateRouter