import React, { useState } from 'react';
import './style.css';
import NoDonation from '../../../assets/NoDonationsIcon.svg';
import BackIcon from '../../../assets/BackIcon.svg';
import Card from '../../../components/cards/Card';



const Donation = () => {
  const donations = [];
  const [campaignItems,setCampaignItems] = useState([
      {
          title: "Kemi's University Tuition",
          category: "Education",
          daysLeft: 2,
          currentAmmount: "50,000",
          totalAmount: "100,000",
          progressPercent: 20,
          totalDonators: 4,
          username: "edohaTheDev",
          totalLikes: 1203
      },
      {
          title: "Dorcas Memorial Fund",
          category: "Memorial",
          daysLeft: 5,
          currentAmmount: "100,000",
          totalAmount: "150,000",
          progressPercent: 60,
          totalDonators: 10,
          username: "uprisenigeria",
          totalLikes: 50
      },
      {
          title: "Robotic School For Kids",
          category: "Education",
          daysLeft: 20,
          currentAmmount: "300,000",
          totalAmount: "400,000",
          progressPercent: 70,
          totalDonators: 8,
          username: "jameson",
          totalLikes: 400
      }
  ]);
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
            campaignItems.map((campaign,index)=>(
              <Card details={campaign} index={index} />
            ))
          }
        </div>
      }
    </div>
  )
}

export default Donation
