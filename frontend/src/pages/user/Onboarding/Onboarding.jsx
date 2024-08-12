import React from 'react';
import Logo from '../../../assets/fundriseLogo.png'
import './style.css'

const Onboarding = () => {
  return (
    <div className='onboarding-page'>
        <div className="onboarding-navbar">
            <img src={Logo} alt="" />
        </div>
        <div className="onboarding-progress">
            <div className="onboarding-progress-step onboarding-active-step">
                <p className="onboarding-step-title">Personal Information</p>
                <p className="onboarding-step-description">Tell us about your personal information</p>
                <div className="onboarding-progress-bar">
                    <div className="onboarding-progress-inner-bar bg-[#187070]"></div>
                </div>
            </div>
            <div className="onboarding-progress-step">
                <p className="onboarding-step-title">Profile Information</p>
                <p className="onboarding-step-description">Update your profile photo and your bio</p>
                <div className="onboarding-progress-bar">
                    <div className="onboarding-progress-inner-bar"></div>
                </div>
            </div>
            
        </div>
        <div className="onboarding-content">
            <div className='onboarding-card'>
                <p className="onboarding-card-title">Let's get your personal information</p>
            </div>
        </div>
    </div>
    
  )
}

export default Onboarding
