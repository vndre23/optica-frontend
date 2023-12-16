import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../LandingPage';
import LoginPage from '../Login';
import RegisterPage from '../Register';
export const RouterPublic = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path={process.env.REACT_APP_ROUTE_LOGIN} element={<LoginPage/>}/>
            <Route path={process.env.REACT_APP_ROUTE_REGISTER} element={<RegisterPage/>}/>
        </Routes>
    </>
  )
}
