import React, { useEffect, useRef, useState } from 'react';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
// import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
// import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import {axiosInstance} from '../../utils/api.js'
import './style.css'
import { Link, useLocation } from 'react-router-dom';

const Card = ({
    details,
    index,
    setModalDetails,
    setModal,
    isliked,
    initialCount,
    donationDetails
}) => {

    // const alreadyLiked = details.Likes.length > 0
    const [likeStatus,setLikeStatus] = useState(false);

    const [likeCount,setLikeCount] = useState(null);

    const location = useLocation();

    const isDonation = location.pathname == "/donations"

    useEffect(()=>{
        console.log("Details Campaign:  ",details)
        const updateCampaign = () => {
            setLikeCount(initialCount)
            setLikeStatus(isliked);
        }
        updateCampaign()
    },[details])

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

        axios.put(`/api/like/${details.campaign_id}`,{reciever_id: details.User?.user_id})
        .then((data)=>{console.log("Successful: ",data)})
        .catch((err)=> {console.log("Errror occured: ",err)})
        
        if(likeStatus){
            setLikeCount((prev)=>prev-1)
        }
        else{
            setLikeCount((prev)=>prev+1)
        }

        setLikeStatus((prev)=>!prev)
    }

    const handleCampaignClick = () => {
        const forModal = isDonation ? donationDetails : details
        setModalDetails(forModal)
        setModal(true)
    }
    
  return (
    <div className="campaign-card" onClick={handleCampaignClick} >
      <div className="img">
        <img 
            src={
                details?.campaign_img
            } 
            alt="Donation picture" 
        />
        <div className="card-badge">
            <LocalPoliceOutlinedIcon sx={{fontSize: "20px"}} />
            <p className="card-category">{details?.Category?.category_name}</p>
        </div>
      </div>
      
      <div className="card-details pt-2">
        {
            !isDonation &&
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
                    likeCount !== null &&
                    <p className="likes-count">{likeCount} likes</p>
                }
            </div>
        }
        <p className="card-title">
            <Link to={`/users/${details?.User?.username}`} className='card-username'>{details?.User?.username }: </Link> 
            {details?.title}
        </p>
        <div className="card-progress">
            <div className="card-timeline">
                <HistoryOutlinedIcon />
                <span>{details?.daysLeft}</span>
            </div>
            <div className="card-progress-bar">
                <div className="progress-inner-bar" style={{width: `${details?.progressPercent && details?.progressPercent}%`}}></div>
            </div>
        </div>
        <div className="progress-rate">
            <p className="progress-value"><span>{details?.current_amount}</span>/{details?.target_amount}</p>
            <p className="progress-percent">{Math.floor(details?.progressPercent)}%</p>
        </div>
        <p className="donators-number"><span>{details?.totalDonators ? details?.totalDonators : 0}</span> donators</p>

      </div>

    </div>
  )
}

export default Card
