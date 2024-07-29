import React, { useEffect, useState } from 'react';
import ArrowBack from '../../../assets/BackIcon.svg'
import Campaign from '../../../assets/CampaignImg.webp'
import User from '../../../assets/ProfilePicture.png'
import MoreIcon from '../../../assets/seeMoreIcon.svg'
import VerifyIcon from '../../../assets/verification-tick.svg'
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

import './style.css'
import { Link, useParams } from 'react-router-dom';
import { axiosQuery } from '../../../utils/api.js';

const Post = () => {

  const { campaign_id } = useParams();
  const [campaign,setCampaign] = useState({})

  useEffect(()=>{
    const getCampaign = () => {
      axiosQuery.get(`/api/campaign/getById/${campaign_id}`)
      .then(({data})=>{
        console.log("Campaign data is:",data);
        setCampaign(data.campaign)
      })
      .catch((err)=>{
        console.log("Error that occured is: ",err)
      })
    }
    getCampaign()
    // alert(`Id is ${campaign_id}`)
  },[])
  return (
    <div className='post-page'>
      <div className='post-page-header'>
        <button className='post-back-btn' onClick={()=>history.back()}>
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
                <p className='post-username'>{campaign?.User?.username}</p>
                <p className='post-user-location'>Abuja, Nigeria</p>
              </div>
            </div>
            <button>
              <img src={MoreIcon} alt="" />
            </button>
          </div>
          <div className="post-img">
            <img src={campaign?.campaign_img} alt="" />
          </div>
          <div className="post-content-details">
            <p className="post-title">{campaign?.title}</p>
            <div className="post-content-user">
              <img src={VerifyIcon} alt="" />
              <p>{campaign?.User?.first_name + " " + campaign?.User?.last_name}</p>
            </div>
            <div className="post-category">
              <LocalPoliceOutlinedIcon sx={{fontSize: "20px"}} />
              <p>{campaign?.Category?.category_name}</p>
            </div>
            <p className="post-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam voluptatum labore veniam deserunt facere adipisci earum expedita quidem ducimus, debitis aliquam magnam eveniet nulla reprehenderit atque nesciunt voluptates distinctio repellendus voluptatibus ipsa est vel. Libero molestias modi suscipit quisquam.<br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus itaque eveniet exercitationem odio perspiciatis sunt eum reiciendis earum quia, nemo porro sequi velit iusto fugit reprehenderit ducimus dicta magni harum illum nulla autem illo. Deserunt, impedit provident. Quae, accusantium dignissimos.
              { campaign?.description }
            </p>
            <div className="post-insights">
              <div className="post-insights-header">
                <p className="post-insights-title">Campaign Progress</p>
                <p className="post-insights-days">
                  <HistoryOutlinedIcon />
                  <span>{campaign?.daysLeft}</span>
                </p>
              </div>
              <div className="post-insights-body">
                <div className="post-insights-percentage"></div>
              </div>
              <div className="post-insights-footer">
                <p className="post-insights-amount">
                  <span>{campaign?.current_amount}</span> / 
                  <span>{ campaign?.target_amount }</span>
                </p>
                <p className="post-insights-pervent">{campaign?.progressPercent}%</p>
              </div>
            </div>
          </div>
          <div className="post-action">
            <Link to={`/donate/${1}`} className="post-donate-btn">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
