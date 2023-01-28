import React from 'react'
import Navbar from "../components/Navbar"
import { BrowserRouter,  Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Home from "../pages/home/Home"
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <>
      <BrowserRouter>
      
      <Navbar/>

      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/home" element={<PrivateRouter/>}  >
          <Route  path=""  element={<Home/>} />
        </Route>


      </Routes>


      </BrowserRouter>
      
      
      </>
        
    </div>
  )
}

export default AppRouter