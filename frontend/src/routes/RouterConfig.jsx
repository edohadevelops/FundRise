import React from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import * as routes from './routes.js';
import { LoginPage, RegisterPage } from '../pages/index.js';

const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.REGISTER} element={<RegisterPage />} />



        <Route path='*' element={<Navigate to={routes.LOGIN} />} />
      </Routes>
    </>
  )
}

export default RouterConfig
