import React, { useContext, useState,useEffect } from 'react';
import './style.css';
import MoreIcon from '../../../assets/seeMoreIcon.svg';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import { AppContext } from '../../../store/AppContext';
// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../../utils/api';
import Tabs from './Tabs';

const Profile = () => {
  const [currentTab,setCurrentTab] = useState("campaign");

  const [user,setUser] = useState(null);
  const [campaigns,setCampaigns] = useState(null);
  const [donations,setDonations] = useState(null);

  const [campaignLoading,setCampaignLoading] = useState(true);
  const [donationLoading,setDonationLoading] = useState(true)

  const { username } = useParams();

  const axios = axiosInstance()

  useEffect(()=>{
    const getUsersDetails = () => {
      axios.get(`/api/user/getByUsername/${username}`)
      .then(({data})=>{
        console.log("APi Response: ",data)
        setUser(data.userDetails)
      })
      .catch((err)=>{
        console.error("Error occoured: ",err)
      })
    }    
    const getUsersCampaigns = () => {
      axios.get(`/api/campaign/getUsersCampaigns/${username}`)
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
      axios.get(`/api/donation/getDonationsByUsername/${username}`)
      .then(({data})=>{
        console.log("Data for user donation: ",data)
        setDonations(data.donations);
        setDonationLoading(false)
      })
      .catch((err)=>{
        console.log("Err when getting user donation is: ",err)
      })
    }
    getUsersDetails();
    getUsersCampaigns();
    getUsersDonations()
  },[]);

  const handleFollowUser = (leader_id) => {
    axios.put(`/api/follow/${leader_id}`)
    .then(({data})=>{
      console.log("Data after trying to follow is: ",data)
    })
    .catch((err)=>{
      console.log("The error while trying to follow is: ",err)
    })

  }

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
              <button className="profile-action bg-primary text-white" onClick={()=>handleFollowUser(user?.user_id)}>Follow</button>
              <button className="profile-action">Share Profile</button>
              <button className="profile-menu-icon">
                <img src={MoreIcon} alt="profile menu" />
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
              <p className="profile-insight-number">500</p>
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
