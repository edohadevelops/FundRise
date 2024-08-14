import React, { useContext, useState } from 'react';
import './style.css';
import MoreIcon from '../../../assets/seeMoreIcon.svg';
import ProfilePicture from '../../../assets/ProfilePicture.png';
import Donation1 from '../../../assets/donation1.png';
import Donation2 from '../../../assets/donation2.png';
import Donation3 from '../../../assets/donation3.png';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { AppContext } from '../../../store/AppContext';

const Profile = () => {
  const [currentTab,setCurrentTab] = useState("campaign");
  const {userDetails} = useContext(AppContext)
  return (
    <div className='profile-page'>
      <div className="profile-details">
        <div className="profile-picture">
          <img src={userDetails.profile_picture} alt="profile picture"/>
        </div>
        <div className="profile-insights">
          <div className="profile-actions-container">
            <p className="profile-username">{userDetails?.username}</p>
            <div className="profile-actions">
              <button className="profile-action">Edit Profile</button>
              <button className="profile-action">Share Profile</button>
              <button className="profile-menu-icon">
                <img src={MoreIcon} alt="profile menu" />
              </button>
            </div>
          </div>
          <div className="profile-insight-details">
            <div className="profile-insight">
              <p className="profile-insight-number">3</p>
              <p className="profile-insight-text">campaigns</p>
            </div>
            <div className="profile-insight">
              <p className="profile-insight-number">20</p>
              <p className="profile-insight-text">donations</p>
            </div>
            <div className="profile-insight">
              <p className="profile-insight-number">500</p>
              <p className="profile-insight-text">followers</p>
            </div>
          </div>
          <div className="profile-bio-section">
            <p className="profile-fullname">{userDetails && userDetails.first_name + " " + userDetails?.last_name}</p>
            <p className="profile-email">
              <AlternateEmailIcon fontSize="small" /> 
              {userDetails?.email}
            </p>
            <p className="profile-bio">{userDetails?.bio}</p>
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
