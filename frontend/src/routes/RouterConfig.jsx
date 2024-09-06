import React, { useContext } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromChildren
} from 'react-router-dom';
import * as routes from './routes.js';
import AppLayout from '../components/layout/AppLayout.jsx';
import ProtectedRoute from '../components/protected/ProtectedRoute.jsx';
import { 
  CampaignPage, 
  CampaignPostPage, 
  DonationPage, 
  HistoryPage, 
  HomePage, 
  LoginPage, 
  MakeDonationPage, 
  NotificationPage, 
  MyProfilePage,
  RegisterPage, 
  UserProfilePage, 
  VerifyDonationPage,
  EditProfilePage
} from '../pages/index.js';
import Onboarding from '../pages/user/Onboarding/Onboarding.jsx';
// import { AppContext } from '../store/AppContext.jsx';
// import Layout from '../components/layout/onboarding/Layout.jsx';


const RouterConfig = () => {


  return (
    <Router>
      <Routes>
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.REGISTER} element={<RegisterPage />} />
        {/* Protected routes */}
        
        <Route element={<ProtectedRoute Component={
          AppLayout
        } />}>
          <Route index element={<HomePage />} />
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.CAMPAIGNS} element={<CampaignPage />} />
          <Route path={routes.POSTS} element={<CampaignPostPage />} />
          <Route path={routes.PAY} element={<MakeDonationPage />} />
          <Route path={routes.DONATIONS} element={<DonationPage />} />
          <Route path={routes.NOTIFICATIONS} element={<NotificationPage />} />
          <Route path={routes.HISTORY} element={<HistoryPage />} />
          <Route path={routes.MYPROFILE} element={<MyProfilePage />} />
          <Route path={routes.USERPROFILE} element={<UserProfilePage />} />
          <Route path={routes.EDITPROFILE} element={<EditProfilePage />} />
          <Route path={routes.ONBOARDING} element={<Onboarding />} />
        </Route>
        {/* End of protected routes */}
        <Route path={routes.VERIFYDONATION} element={<VerifyDonationPage />} />
        <Route path='*' element={<Navigate to={routes.LOGIN} />} />
      </Routes>
    </Router>
  )

}

export default RouterConfig
