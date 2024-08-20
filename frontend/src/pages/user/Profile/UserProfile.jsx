import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import MoreIcon from '../../../assets/seeMoreIcon.svg';
import ProfilePicture from '../../../assets/ProfilePicture.png';
import Donation1 from '../../../assets/donation1.png';
import Donation2 from '../../../assets/donation2.png';
import Donation3 from '../../../assets/donation3.png';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { AppContext } from '../../../store/AppContext';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../../utils/api';
import MyProfile from './MyProfile'


const Profile = () => {
  const [currentTab,setCurrentTab] = useState("campaign");
  // 
  const [otherUser,setOtherUser] = useState(null)

  const {username} = useParams();
  const {userDetails} = useContext();

  const axios = axiosInstance()

  useEffect(()=>{
    const getotherUser = () => {
      axios.get(`/api/user/getByUsername/${username}`)
      .then(({data})=>{
        console.log("APi Response: ",data)
        setOtherUser(data.userDetails)
      })
      .catch((err)=>{
        console.error("Error occoured: ",err)
      })
    }
    getotherUser()
  },[])
  return (
    <div className='profile-page'>
      <div className="profile-details">
        <div className="profile-picture">
          <img src={otherUser?.profile_picture} alt="profile picture"/>
        </div>
        <div className="profile-insights">
          <div className="profile-actions-container">
            <p className="profile-username">{otherUser?.username}</p>
            <div className="profile-actions">
              <button className="profile-action bg-primary text-white">Follow</button>
              <button className="profile-action">Share Profile</button>
              <button className="profile-menu-icon">
                <img src={MoreIcon} alt="profile menu" />
              </button>
            </div>
          </div>
          <div className="profile-insight-details">
            <div className="profile-insight">
              <p className="profile-insight-number">{otherUser?.totalCampaigns}</p>
              <p className="profile-insight-text">campaigns</p>
            </div>
            <div className="profile-insight">
              <p className="profile-insight-number">{otherUser?.totalDonations}</p>
              <p className="profile-insight-text">donations</p>
            </div>
            <div className="profile-insight">
              <p className="profile-insight-number">500</p>
              <p className="profile-insight-text">followers</p>
            </div>
          </div>
          <div className="profile-bio-section">
            <p className="profile-fullname">{otherUser && otherUser.first_name + " " + otherUser?.last_name}</p>
            <p className="profile-email">
              <AlternateEmailIcon fontSize="small" /> 
              {otherUser?.email}
            </p>
            <p className="profile-bio">{otherUser?.bio}</p>
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
        <div className="profile-campaign">
          <img src={Donation2} alt="profile-post" />
        </div>
        <div className="profile-campaign">
          <img src={Donation1} alt="profile-post" />
        </div>
        <div className="profile-campaign">
          <img src={Donation3} alt="profile-post" />
        </div>
      </div>
    </div>
  )
}

export default Profile
