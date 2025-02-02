import React, { useContext, useState,useEffect } from 'react';
import './style.css';
import MoreIcon from '../../../assets/seeMoreIcon.svg';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { AppContext } from '../../../store/AppContext';

import { axiosInstance } from '../../../utils/api';
import Tabs from './Tabs';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const [currentTab,setCurrentTab] = useState("campaign");
  const {userDetails} = useContext(AppContext);

  const [user,setUser] = useState(null);
  const [campaigns,setCampaigns] = useState(null);
  const [donations,setDonations] = useState(null);

  const [campaignLoading,setCampaignLoading] = useState(true);
  const [donationLoading,setDonationLoading] = useState(true)

  const axios = axiosInstance()

  useEffect(()=>{
    const getUserDetails = () => {
      axios.get(`/api/user/getByUsername/${userDetails?.username}`)
      .then(({data})=>{
        console.log("APi Response: ",data)
        setUser(data.userDetails)
      })
      .catch((err)=>{
        console.error("Error occoured: ",err)
      })
    }
    const getUsersCampaigns = () => {
      // const name = "edohaTheDev"
      axios.get(`/api/campaign/getUsersCampaigns/${userDetails.username}`)
      .then(({data})=>{
        console.log("Data for user campaign: ",data)
        setCampaigns(data.campaigns);
        setCampaignLoading(false)
      })
      .catch((err)=>{
        console.log("Err when getting user data is: ",err)
      })
    }
    const getUsersDonations = () => {
      // const name = "edohaTheDev"
      axios.get(`/api/donation/getDonationsByUsername/${userDetails.username}`)
      .then(({data})=>{
        console.log("Data for user donation: ",data)
        setDonations(data.donations);
        setDonationLoading(false)
      })
      .catch((err)=>{
        console.log("Err when getting user donation is: ",err)
      })
    }

    getUserDetails()
    getUsersCampaigns();
    getUsersDonations()
  },[location])

  return (
    <div className='profile-page'>
      <div className="profile-details">
        <div className="profile-picture">
          <img src={user?.profile_picture} alt="profile picture"/>
        </div>
        <div className="profile-insights">
          <div className="profile-actions-container">
            <p className="profile-username">{user?.username}</p>
            <div className="profile-actions">
              <button className="profile-action" onClick={()=>{ navigate("/profile/edit") }}>Edit Profile</button>
              <button className="profile-action">Share Profile</button>
              <button className="profile-menu-icon">
                <SettingsOutlinedIcon sx={{fontSize: "20px"}} />
              </button>
            </div>
          </div>
          <div className="profile-insight-details">
            <div className="profile-insight">
              <p className="profile-insight-number">{user?.totalCampaigns}</p>
              <p className="profile-insight-text">campaigns</p>
            </div>
            <div className="profile-insight">
              <p className="profile-insight-number">{user?.totalDonations}</p>
              <p className="profile-insight-text">donations</p>
            </div>
            <div className="profile-insight">
              <p className="profile-insight-number">{user?.totalFollowers}</p>
              <p className="profile-insight-text">followers</p>
            </div>
          </div>
          <div className="profile-bio-section">
            <p className="profile-fullname">{user && user?.first_name + " " + user?.last_name}</p>
            <p className="profile-email">
              <AlternateEmailIcon fontSize="small" /> 
              {user?.email}
            </p>
            <p className="profile-bio">{user?.bio}</p>
            <p>Followed by Amen, Edoha +64 more</p>
          </div>
        </div>
      </div>
      <div className="profile-tabs">
        <button 
          className={
            `profile-tab ${
              currentTab === "campaign" &&
              "active-tab"
            }
          `}
          onClick={()=> setCurrentTab("campaign")}
        >
          Campaigns
        </button>
        <button
          className={
            `profile-tab ${
              currentTab === "donation" &&
              "active-tab"
            }
          `}
          onClick={()=> setCurrentTab("donation")}
        >
          Donations
        </button>
      </div>
      <div className="profile-results">
        {
          currentTab === "campaign" ?
          <Tabs.Campaigns  campaigns={campaigns} isCampaignLoading={campaignLoading} /> :
          <Tabs.Donations donations={donations} isDonationsLoading={donationLoading}/>
        }
      </div>
    </div>
  )
}

export default Profile
