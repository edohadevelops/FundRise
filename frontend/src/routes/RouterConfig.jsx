import React from 'react';
import { 
  Route,
  Navigate, 
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
  ProfilePage, 
  RegisterPage, 
  VerifyDonationPage
} from '../pages/index.js';

const RouterConfig = createBrowserRouter(
  createRoutesFromChildren(
    <React.Fragment>
      <Route path={routes.LOGIN} element={<LoginPage />} />
      <Route path={routes.REGISTER} element={<RegisterPage />} />
      {/* Protected routes */}
      
      <Route element={<ProtectedRoute Component={AppLayout} />}>
        <Route index element={<HomePage />} />
        <Route path={routes.HOME} element={<HomePage />} />
        <Route path={routes.CAMPAIGNS} element={<CampaignPage />} />
        <Route path={routes.POSTS} element={<CampaignPostPage />} />
        <Route path={routes.PAY} element={<MakeDonationPage />} />
        <Route path={routes.DONATIONS} element={<DonationPage />} />
        <Route path={routes.NOTIFICATIONS} element={<NotificationPage />} />
        <Route path={routes.HISTORY} element={<HistoryPage />} />
        <Route path={routes.PROFILE} element={<ProfilePage />} />
      </Route>
      {/* End of protected routes */}
      <Route path={routes.VERIFYDONATION} element={<VerifyDonationPage />} />
      <Route path='*' element={<Navigate to={routes.LOGIN} />} />
    </React.Fragment>
  )
)

export default RouterConfig
