import React, { useEffect, useState } from 'react';
import Campaign from '../../../assets/CampaignImg.webp';
import User from '../../../assets/ProfilePicture.png'
import MoreIcon from '../../../assets/seeMoreIcon.svg';
import VerifyIcon from '../../../assets/verification-tick.svg'
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import './style.css'
import { Link } from 'react-router-dom';

const CampaignModal = ({
  setModal
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
  },[])

  return (
    <div className='view-campaign-modal' onClick={onBackdropDisable}>
      <div className='view-campaign-body'>
        <div className={`view-campaign-left ${ showContent && "top-0" }`}>
          <div className="view-campaign-content">
            <div className="view-campaign-img">
              <img src={Campaign} alt="" />
              <div className="view-campaign-user-card">
                  <div className='view-campaign-user-details gap-3'>
                    <img src={User} alt="" />
                    <div className='view-campaign-flex-user-details'>
                      <p className='view-campaign-username'>edohaTheDev</p>
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
                <p className="view-campaign-title">Raise Funds for Farming</p>
                <div className="view-campaign-content-user">
                  <img src={VerifyIcon} alt="" />
                  <p>Amen Edoha</p>
                </div>
                {/* <div className="view-campaign-category">
                  <LocalPoliceOutlinedIcon sx={{fontSize: "20px"}} />
                  <p>Farming</p>
                </div> */}
                <p className="view-campaign-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi quia dolores illum debitis vero, impedit quas nulla qui necessitatibus quod eius praesentium accusantium quidem ducimus ut, voluptatum, soluta quis! Reiciendis quos non voluptates. Architecto fugit fuga perspiciatis dolor rem!
                </p>
                <div className="view-campaign-insights">
                  <div className="view-campaign-insights-header">
                    <p className="view-campaign-insights-title">Campaign Progress</p>
                    <p className="view-campaign-insights-days">
                      <HistoryOutlinedIcon />
                      <span>2 days left</span>
                    </p>
                  </div>
                  <div className="view-campaign-insights-body">
                    <div className="view-campaign-insights-percentage"></div>
                  </div>
                  <div className="view-campaign-insights-footer">
                    <p className="view-campaign-insights-amount">
                      <span>50,000</span> / 
                      <span>1,000,000</span>
                    </p>
                    <p className="view-campaign-insights-pervent">20%</p>
                  </div>
                </div>
                <Link to={"/campaigns/34"} className='view-full-details-btn'>
                  <p>View Full Details</p>
                </Link>
                <div className="post-action">
                  <button className="post-donate-btn">
                    DONATE NOW
                  </button>
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
