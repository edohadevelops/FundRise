import React from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import * as routes from './routes.js';
import AppLayout from '../components/layout/AppLayout.jsx';
import ProtectedRoute from '../components/protected/ProtectedRoute.jsx';
import { 
  CampaignPage, 
  DonationPage, 
  HistoryPage, 
  HomePage, 
  LoginPage, 
  NotificationPage, 
  ProfilePage, 
  RegisterPage 
} from '../pages/index.js';

const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.REGISTER} element={<RegisterPage />} />
        {/* Protected routes */}
        
        <Route element={<ProtectedRoute Component={AppLayout} />}>
          <Route index element={<HomePage />} />
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.CAMPAIGNS} element={<CampaignPage />} />
          <Route path={routes.DONATIONS} element={<DonationPage />} />
          <Route path={routes.NOTIFICATIONS} element={<NotificationPage />} />
          <Route path={routes.HISTORY} element={<HistoryPage />} />
          <Route path={routes.PROFILE} element={<ProfilePage />} />
        </Route>
        <Route path='*' element={<Navigate to={routes.LOGIN} />} />



      </Routes>
    </>
  )
}

export default RouterConfig
