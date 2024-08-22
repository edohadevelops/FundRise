import React, { useEffect } from 'react';
import './style.css';
import SuccessIcon from '../../../assets/success-icon.png'
import FailedIcon from '../../../assets/fail-icon.png'
import { Link } from 'react-router-dom';

const DonationModal = ({details,closeModal}) => {
    useEffect(()=>{
        console.log("The details coming to the modal is: ",details)
    },[])

    const handleModalClose = (e) => {
        if(e.target === e.currentTarget){
            closeModal(false)
        }
    }
  return (
    <div className='view-campaign-modal' onClick={handleModalClose}>
        <div className="donation-modal-content">
            {
                details.status === "success" ?
                <img src={SuccessIcon} alt='success-icon' />:
                <img src={FailedIcon} alt='fail-icon' />
            }
            <p className="donation-modal-text">
                Your donation of 
                <span> N {details.amount} </span> 
                {details.status === "success" ? "was successful!" : "Failed."}
            </p>
            <Link to={`/donate/${details.campaign_id}`} className='donation-modal-button'>
                Donate Again
            </Link>
        </div>
    </div>
  )
}

export default DonationModal;
