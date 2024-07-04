import React from 'react';
import Donation1 from '../../assets/donation1.png';
import Donation2 from '../../assets/donation2.png';
import Donation3 from '../../assets/donation3.png';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import './style.css'

const Card = ({details,index}) => {
  return (
    <div className="campaign-card">
      <div className="img">
        <img 
            src={
                index === 0 ?
                Donation2 :
                index === 1 ?
                Donation1 : 
                index === 2 ?
                Donation3 :
                undefined
            } 
            alt="Donation picture" 
        />
        <div className="card-badge">
            <LocalPoliceOutlinedIcon sx={{fontSize: "20px"}} />
            <p className="card-category">{details?.category ? details.category : "Education"}</p>
        </div>
      </div>
      
      <div className="card-details">
        <div className="card-interactions">
            <div className="flex justify-between">
                <div className='like-comment-share'>
                    <FavoriteBorderOutlinedIcon sx={{fontSize: "28px"}} />
                    <MapsUgcOutlinedIcon sx={{fontSize: "28px"}} />
                    <SendOutlinedIcon sx={{fontSize: "28px"}} />
                </div>
                <BookmarkBorderOutlinedIcon sx={{fontSize: "28px"}} />
            </div>
            <p className="likes-count">{details?.totalLikes} likes</p>
        </div>
        <p className="card-title">
            <span className='card-username'>{details.username}: </span> 
            {details?.title}
        </p>
        <div className="card-progress">
            <div className="card-timeline">
                <HistoryOutlinedIcon />
                <span>{details.daysLeft} days Left</span>
            </div>
            <div className="card-progress-bar">
                <div className="progress-inner-bar" style={{width: `${details?.progressPercent ? details?.progressPercent : 20}%`}}></div>
            </div>
        </div>
        <div className="progress-rate">
            <p className="progress-value"><span>{details.currentAmmount}</span>/{details.totalAmount}</p>
            <p className="progress-percent">{details.progressPercent}%</p>
        </div>
        <p className="donators-number"><span>{details.totalDonators}</span> donators</p>

      </div>

    </div>
  )
}

export default Card
