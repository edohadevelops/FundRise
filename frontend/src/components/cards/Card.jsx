import React, { useEffect, useRef, useState } from 'react';
import Donation1 from '../../assets/donation1.png';
import Donation2 from '../../assets/donation2.png';
import Donation3 from '../../assets/donation3.png';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import {axiosInstance} from '../../utils/api.js'
import './style.css'

const Card = ({
    details,
    index,
    setCampaign,
    setModal,
    isliked,
    initialCount
}) => {

    // const alreadyLiked = details.Likes.length > 0
    const [likeStatus,setLikeStatus] = useState(isliked);

    const [likeCount,setLikeCount] = useState(initialCount)

    const likeRef = useRef();
    const unLikeRef = useRef();

    // useEffect(()=>{
    //     if(details?.Likes?.length > 0){
    //         setLikeStatus(true)
    //     }
    // },[]);

    const axios = axiosInstance()

    const onLikeClick = (event) => {
        event.stopPropagation();

        axios.put(`/api/like/${details.campaign_id}`)
        .then((data)=>{console.log("Successful: ",data)})
        .catch((err)=> {console.log("Errror occured: ",err)})

        setLikeStatus((prev)=>!prev)
    }

    const handleCampaignClick = () => {
        setCampaign(details)
        setModal(true)
    }
    
  return (
    <div className="campaign-card" onClick={handleCampaignClick} >
      <div className="img">
        <img 
            src={
                details.campaign_img ?
                details.campaign_img :
                index === 0 ?
                Donation2 :
                index === 1 ?
                Donation1 : 
                // index === 2 &&
                Donation3 
            } 
            alt="Donation picture" 
        />
        <div className="card-badge">
            <LocalPoliceOutlinedIcon sx={{fontSize: "20px"}} />
            <p className="card-category">{details?.Category?.category_name}</p>
        </div>
      </div>
      
      <div className="card-details">
        <div className="card-interactions">
            <div className="flex justify-between">
                <div className='like-comment-share'>
                    {
                        // !likeStatus ?
                        <button 
                          className={`
                            like-button 
                            ${!likeStatus && "show-like-button"}
                          `}
                         onClick={onLikeClick}
                         ref={unLikeRef}
                        >

                            {
                                !likeStatus ?
                                <FavoriteBorderOutlinedIcon className={""
                                    // "like-icon" + likeStatus && "scale-50" 
                                } sx={{fontSize: "28px"}} /> :
                                <FavoriteIcon className={""
                                    // "like-icon" + likeStatus && "scale-100" ""
                                } sx={{fontSize: "28px",color: "#F15A59"}} />
                            }
                        </button> 
                        // <button 
                        //   className={`
                        //     like-button 
                        //     ${likeStatus && "show-like-button"}
                        //   `}
                        //  onClick={(e)=>onLikeClick(e,false)}
                        //  ref={likeRef}
                        // >
                        //     <FavoriteIcon 
                        //       className={`
                        //         like-icon 
                        //         ${likeStatus && "show-like-icon"}
                        //       `} 
                        //       sx={{fontSize: "28px",color: "#F15A59"}}
                        //     />
                        // </button>
                        
                    }
                    {/* <BookmarkBorderOutlinedIcon sx={{fontSize: "28px"}} /> */}
                </div>
                <button className="bg-primary text-white p-2 rounded-lg">
                    Donate
                </button>
            </div>
            {
                // likeCount > 0 &&
                <p className="likes-count">{likeCount} likes</p>
            }
        </div>
        <p className="card-title">
            <span className='card-username'>{details.User?.username }: </span> 
            {details?.title}
        </p>
        <div className="card-progress">
            <div className="card-timeline">
                <HistoryOutlinedIcon />
                <span>{details.daysLeft}</span>
            </div>
            <div className="card-progress-bar">
                <div className="progress-inner-bar" style={{width: `${details?.progressPercent && details?.progressPercent}%`}}></div>
            </div>
        </div>
        <div className="progress-rate">
            <p className="progress-value"><span>{details.current_amount}</span>/{details.target_amount}</p>
            <p className="progress-percent">{details.progressPercent}%</p>
        </div>
        <p className="donators-number"><span>{details.totalDonators ? details.totalDonators : 0}</span> donators</p>

      </div>

    </div>
  )
}

export default Card
