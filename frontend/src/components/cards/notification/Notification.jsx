import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
import { axiosInstance } from '../../../utils/api'
import { formatter } from '../../../utils/numberFormatter'

const Donation = ({ username,profile_pic,donation_amount,donation_message,campaign_image,campaign_id }) => {
    return (
        <div className="notification-card">
            <Link to={`/users/${username}`} className="notification-user-img">
                <img src={profile_pic} alt="" />
            </Link>
            <div className='notification-info'>
                <div className="notification-content">
                    <p>
                        <Link to={`/users/${username}`}>{username}</Link> made a donation of <span className='font-semibold'>{formatter.format(donation_amount).replace("₦", "₦ ")}</span> to your campaign: "{donation_message}". <span className="text-gray-500">3h</span>
                    </p>
                </div>
                <Link to={`/campaigns/${campaign_id}`} className="notification-campaign-img">
                    <img src={campaign_image} alt="" />
                </Link>
            </div>

        </div>
    )

}

const Like = ({ username,profile_pic,campaign_image,campaign_id }) => {
    return (
        <div className="notification-card">
            <Link to={`/users/${username}`} className="notification-user-img">
                <img src={profile_pic} alt="" />
            </Link>
            <div className="notification-info">
                <div className="notification-content">
                    <p><Link to={`/users/${username}`}>{username}</Link> liked your campaign. <span className="text-gray-500">17h</span></p>
                </div>
                <Link to={`/campaigns/${campaign_id}`} className="notification-campaign-img">
                    <img src={campaign_image} alt="" />
                </Link>
            </div>

        </div>
    )

}

const Follow = ({ username,profile_pic,initial_status,user_id }) => {

    const axios = axiosInstance();

    const handleFollowClick = (event) => {
        event.stopPropagation();

        setIsFollowed((prev)=>!prev)
        axios.put(`/api/follow/${user_id}`)
        .then(({data})=>console.log("User updated successfully",data))
        .catch((err)=>console.log("An error occurred when trying to follow or unfollow: ",err))
    }

    const [isFollowed,setIsFollowed] = useState(initial_status)
    return (
        <div className="notification-card">
            <Link to={`/users/${username}`} className="notification-user-img">
                <img src={profile_pic} alt="" />
            </Link>
            <div className="notification-info">
                <div className="notification-content">
                    <p><Link to={`/users/${username}`}>{username}</Link> started following you. <span className='text-gray-500' >4h</span></p>
                </div>
                <button className={`notification-follow-button ${isFollowed ? "already-following" : "not-following"} `} onClick={handleFollowClick}>
                    {
                        isFollowed ?
                        "Following" :
                        "Follow"
                    }
                </button>
            </div>

        </div>
    )

}


export default {
    Follow,
    Like,
    Donation
}