import React, { useEffect, useState } from 'react';
import Campaign from '../../../assets/CampaignImg.webp';
import User from '../../../assets/ProfilePicture.png'
import MoreIcon from '../../../assets/seeMoreIcon.svg';
import VerifyIcon from '../../../assets/verification-tick.svg'
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './style.css'
import { Link } from 'react-router-dom';

const CampaignModal = ({
  setModal,
  campaign
}) => {

  const onBackdropDisable = (e) => {
    if(e.target === e.currentTarget){
    setModal(false)

    }
  }
  const [showContent,setShowContent] = useState(false);
  const [openCurtain,setOpenCurtain] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setShowContent(true)
    },100) 

    setTimeout(()=>{
      setOpenCurtain(true)
    },1500)

    console.log("Selected campaign is: ", campaign)
  },[])

  return (
    <div className='view-campaign-modal' onClick={onBackdropDisable}>
      <div className='view-campaign-body'>
        <div className={`view-campaign-left ${ showContent && "top-0" }`}>
          <div className="view-campaign-content">
            <div className="view-campaign-img">
              <img src={campaign?.campaign_img} alt="" />
              <div className="view-campaign-user-card">
                  <div className='view-campaign-user-details gap-3'>
                    <img src={User} alt="" />
                    <div className='view-campaign-flex-user-details'>
                      <p className='view-campaign-username'>{campaign?.User?.username}</p>
                      <p className='view-campaign-user-location'>Abuja, Nigeria</p>
                    </div>
                  </div>
                  <button>
                    Contact
                  </button>
                </div>
            </div>
            <div className={`view-campaign-left-curtain ${openCurtain && "bottom-full"}`}>

            </div>

          </div>

        </div>
        <div className={`view-campaign-right ${ showContent && "top-0" }`}>
            <div className="view-campaign-content">
              <div className="view-campaign-details">          
                <p className="view-campaign-title">{campaign.title}</p>
                <div className="view-campaign-content-user">
                  <img src={VerifyIcon} alt="" />
                  <p>{campaign?.User?.first_name + " " + campaign?.User?.last_name}</p>
                </div>
                <div className="view-campaign-category">
                  <LocalPoliceOutlinedIcon sx={{fontSize: "20px"}} />
                  <p>{campaign?.Category?.category_name}</p>
                </div>
                <p className="view-campaign-description">
                  
                  {
                    campaign?.description
                  }<br /><br />
                </p>
                <div className="view-campaign-insights">
                  <div className="view-campaign-insights-header">
                    <p className="view-campaign-insights-title">Campaign Progress</p>
                    <p className="view-campaign-insights-days">
                      <HistoryOutlinedIcon />
                      <span>{campaign?.daysLeft}</span>
                    </p>
                  </div>
                  <div className="view-campaign-insights-body">
                    <div className="view-campaign-insights-percentage"></div>
                  </div>
                  <div className="view-campaign-insights-footer">
                    <p className="view-campaign-insights-amount">
                      <span>{campaign?.current_amount}</span> / 
                      <span>{campaign?.target_amount}</span>
                    </p>
                    <p className="view-campaign-insights-pervent">{campaign?.progressPercent}%</p>
                  </div>
                </div>
                <Link to={`/campaigns/${campaign?.campaign_id}`} className='view-campaign-full-details-btn'>
                  <p>View Full Details</p>
                  <KeyboardArrowRightIcon />
                </Link>
                <div className=".view-campaign-action">
                  <Link to={`/donate/${campaign?.campaign_id}`} className="view-campaign-donate-btn">
                    DONATE NOW
                  </Link>
                </div>
              </div>
              <div className={`view-campaign-right-curtain ${openCurtain && "bottom-full"}`}>
                
              </div>

            </div>

        </div>
      </div>
      
    </div>
  )
}

export default CampaignModal
