import React from 'react';
import ArrowBack from '../../../assets/BackIcon.svg'
import Campaign from '../../../assets/CampaignImg.webp'
import User from '../../../assets/ProfilePicture.png'
import MoreIcon from '../../../assets/seeMoreIcon.svg'
import VerifyIcon from '../../../assets/verification-tick.svg'
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

import './style.css'

const Post = () => {
  return (
    <div className='post-page'>
      <div className='post-page-header'>
        <button className='post-back-btn'>
          <img src={ArrowBack} alt="" />
        </button>
        <p>Campaigns</p>

      </div>
      <div className="post-page-body">
        <div className="post-body-content">
          <div className="post-user-card">
            <div className='post-user-details'>
              <img src={User} alt="" />
              <div className='post-flex-user-details'>
                <p className='post-username'>edohaTheDev</p>
                <p className='post-user-location'>Abuja, Nigeria</p>
              </div>
            </div>
            <button>
              <img src={MoreIcon} alt="" />
            </button>
          </div>
          <div className="post-img">
            <img src={Campaign} alt="" />
          </div>
          <div className="post-content-details">
            <p className="post-title">Raise Funds for Farming</p>
            <div className="post-content-user">
              <img src={VerifyIcon} alt="" />
              <p>Amen Edoha</p>
            </div>
            <div className="post-category">
              <LocalPoliceOutlinedIcon sx={{fontSize: "20px"}} />
              <p>Farming</p>
            </div>
            <p className="post-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam voluptatum labore veniam deserunt facere adipisci earum expedita quidem ducimus, debitis aliquam magnam eveniet nulla reprehenderit atque nesciunt voluptates distinctio repellendus voluptatibus ipsa est vel. Libero molestias modi suscipit quisquam.<br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus itaque eveniet exercitationem odio perspiciatis sunt eum reiciendis earum quia, nemo porro sequi velit iusto fugit reprehenderit ducimus dicta magni harum illum nulla autem illo. Deserunt, impedit provident. Quae, accusantium dignissimos.
            </p>
            <div className="post-insights">
              <div className="post-insights-header">
                <p className="post-insights-title">Campaign Progress</p>
                <p className="post-insights-days">
                  <HistoryOutlinedIcon />
                  <span>2 days left</span>
                </p>
              </div>
              <div className="post-insights-body">
                <div className="post-insights-percentage"></div>
              </div>
              <div className="post-insights-footer">
                <p className="post-insights-amount">
                  <span>50,000</span> / 
                  <span>1,000,000</span>
                </p>
                <p className="post-insights-pervent">20%</p>
              </div>
            </div>
          </div>
          <div className="post-action">
            <button className="post-donate-btn">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
