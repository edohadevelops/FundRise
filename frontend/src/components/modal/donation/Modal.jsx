import React, { useEffect } from 'react';
import './style.css'

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
        <div className="donation-modal-content"></div>
    </div>
  )
}

export default DonationModal;
