import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import NoDonation from '../../../assets/NoDonationsIcon.svg';
import BackIcon from '../../../assets/BackIcon.svg';
import Card from '../../../components/cards/Card';
import { axiosInstance } from '../../../utils/api';
import { AppContext } from '../../../store/AppContext';
import DonationModal from '../../../components/modal/donation/Modal';
import DonationCard from '../../../components/cards/donation/DonationCard';



const Donation = () => {
  // const donations = [];
  const [isLoading,setIsLoading] = useState(true)
  const [donations,setDonations] = useState([]);

  const [donationOpen,setDonationOpen] = useState(false)

  const {userDetails} = useContext(AppContext);

  const [ modalDetails, setModalDetails ] = useState(null)

  const axios = axiosInstance();

  useEffect(()=>{
    const getDonations = () => {
      axios.get(`/api/donation/getDonationsByUserid/${userDetails.user_id}`)
      .then(({data})=>{
        console.log("Donations in donation page is: ",data);
        setDonations(data.donations);
        setIsLoading(false)
      })
      .catch((err)=>{
        console.log("The error that occcured is: ",err)
      })
    }

    getDonations()
  },[])
  return (
    <div className='donation-page'>
      <div className='donation-header'>
        <p 
          className={
            `${
              donations.length === 0 ?
              "page-title":
              "donation-title"
            }`
          }
        >
          My Donations
        </p>
        {
          donations.length === 1 &&
          <button className='donation-back-btn'>
            <img src={BackIcon} alt back-btn />
          </button>
        }
      </div>
      {
        donations.length === 0 ?
        <div className="donation-empty">
          <div className="donation-empty-content">
            <div className="donation-empty-icon">
              <img src={NoDonation} alt="no donations error icon" />
            </div>
            <div className="donation-empty-text">
              <p className="page-title">No donations yet.</p>
              <p className="donation-empty-description">you currently do not have any<br />donations</p>
            </div>
          </div>
          <button className="make-donation-btn">
            Make Donation
          </button>
        </div>:
        <div className="campaign-list">
          {
            donations?.map((donation,index)=>(
              <DonationCard 
                details={donation?.Campaign} 
                index={index}
                isliked={donation?.Campaign?.hasUserLiked} 
                donationDetails={
                  {
                    amount: donation?.donation_amount,
                    status: donation?.donation_status,
                    campaign_id: donation?.Campaign?.campaign_id
                  }
                }
                setModalDetails={setModalDetails}
                setModal={setDonationOpen}
              />
            ))
          }
        </div>
      }
      {
        donationOpen && 
        <DonationModal details={modalDetails} closeModal={setDonationOpen} />
      }
    </div>
  )
}

export default Donation
