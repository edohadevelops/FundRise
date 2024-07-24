import React from 'react';
import User from '../../../assets/ProfilePicture.png'
import ArrowBack from '../../../assets/BackIcon.svg';
import './style.css'



const Pay = () => {
  return (
    <div className="payment-page">
      <div className="pay-header">
        <button>
            <img src={ArrowBack} />
        </button>
        <p>Make Donation</p>
      </div>
      <div className="pay-campaign-summary">
        <div className="pay-campaign-summary-img">
            <img src={User} alt="" />
        </div>
        <div>
            <p>You're about to support <span className='font-semibold'>Donate to support and evacuate 10 families in Gaza</span></p>
            <small>Your donation would help Amen Edoha</small>
        </div>
      </div>
    </div>
  )
}

export default Pay
