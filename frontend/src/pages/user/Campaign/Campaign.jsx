import React, { useState } from 'react';
import './style.css';
import Filter from '../../../assets/Filter2.svg';
import AddIcon from '../../../assets/addLine.svg';
import ForYou from '../../../tabs/Campaign/ForYou/ForYou';
import Following from '../../../tabs/Campaign/Following/Following';

const Campaign = () => {
  const [currentTab,setCurrentTab] = useState("For You");
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
    <div className='campaign-page'>
      <div className="campaign-header">
        <p className="page-title">Campaigns</p>
        <div className="campaign-icons">
          <div className="campaign-icon">
            <img src={AddIcon} alt='add-icon' />
          </div>
          <div className="campaign-icon">
            <img src={Filter} alt='filter-icon' />
          </div>
        </div>
      </div>
      <div className="campaign-tabs">
        <button 
          className={
            `campaign-tab ${currentTab === "For You" && "active-campaign"}`
          }
          onClick={()=>setCurrentTab("For You")}
        >
          For You
        </button>
        <button 
          className={
            `campaign-tab ${currentTab === "Following" && "active-campaign"}`
          }
          onClick={()=>setCurrentTab("Following")}
        >
          Following
        </button>
      </div>
      <div className="campaign-list">
        {
          currentTab === "For You" ?
          <ForYou campaigns={campaignItems} />:
          <Following campaigns={campaignItems} />
        }
      </div>
    </div>
  )
}

export default Campaign;
