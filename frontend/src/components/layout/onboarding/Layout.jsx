import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../../assets/fundriseLogo.png'
import './style.css'

const Layout = () => {
  return (
    <div>
        <div className="onboarding-navbar">
            <img src={Logo} alt="" />
        </div>
        <div className="onboarding-content">
            {
                <Outlet />
            }
        </div>
    </div>
  )
}

export default Layout
