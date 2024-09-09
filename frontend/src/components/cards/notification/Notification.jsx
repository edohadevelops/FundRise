import { Link } from 'react-router-dom'
import './style.css'
import { useEffect, useState } from 'react'
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInWeeks, differenceInYears } from 'date-fns'
import { axiosInstance } from '../../../utils/api'
import { formatter } from '../../../utils/numberFormatter'

const Donation = ({ username,profile_pic,donation_amount,donation_message,campaign_image,campaign_id,date }) => {

    // const [timeStamp,setTimeStamp] = useState();

    const getTimeStamp = (date) => {
        const now = new Date();
        const then = new Date(date);

        const minutes = differenceInMinutes(now,then);
        const hour = differenceInHours(now,then);
        const day = differenceInDays(now,then);
        const week = differenceInWeeks(now,then);
        const month = differenceInMonths(now,then);
        const year = differenceInYears(now,then);

        if(year > 0) return `${year}yo`
        else if(month > 0) return `${month}mo`
        else if(week > 0) return `${week}w`
        else if(day > 0) return `${day}d`
        else if(hour > 0) return `${hour}h`
        else if(minutes > 1) return `${minutes}m`
        else return `now`

    }
    return (
        <div className="notification-card">
            <Link to={`/users/${username}`} className="notification-user-img">
                <img src={profile_pic} alt="" />
            </Link>
            <div className='notification-info'>
                <div className="notification-content">
                    <p>
                        <Link to={`/users/${username}`}>{username}</Link> made a donation of <span className='font-semibold'>{formatter.format(donation_amount).replace("₦", "₦ ")}</span> to your campaign: "{donation_message}". <span className="text-gray-500">{getTimeStamp(date)}</span>
                    </p>
                </div>
                <Link to={`/campaigns/${campaign_id}`} className="notification-campaign-img">
                    <img src={campaign_image} alt="" />
                </Link>
            </div>

        </div>
    )

}

const Like = ({ username,profile_pic,campaign_image,campaign_id,date }) => {
    const getTimeStamp = (date) => {
        const now = new Date();
        const then = new Date(date);

        const minutes = differenceInMinutes(now,then);
        const hour = differenceInHours(now,then);
        const day = differenceInDays(now,then);
        const week = differenceInWeeks(now,then);
        const month = differenceInMonths(now,then);
        const year = differenceInYears(now,then);

        if(year > 0) return `${year}yo`
        else if(month > 0) return `${month}mo`
        else if(week > 0) return `${week}w`
        else if(day > 0) return `${day}d`
        else if(hour > 0) return `${hour}h`
        else if(minutes > 1) return `${minutes}m`
        else return `now`

    }
    return (
        <div className="notification-card">
            <Link to={`/users/${username}`} className="notification-user-img">
                <img src={profile_pic} alt="" />
            </Link>
            <div className="notification-info">
                <div className="notification-content">
                    <p><Link to={`/users/${username}`}>{username}</Link> liked your campaign. <span className="text-gray-500">{getTimeStamp(date)}</span></p>
                </div>
                <Link to={`/campaigns/${campaign_id}`} className="notification-campaign-img">
                    <img src={campaign_image} alt="" />
                </Link>
            </div>

        </div>
    )

}

const Follow = ({ username,profile_pic,initial_status,user_id,date }) => {

    const axios = axiosInstance();

    const handleFollowClick = (event) => {
        event.stopPropagation();

        setIsFollowed((prev)=>!prev)
        axios.put(`/api/follow/${user_id}`)
        .then(({data})=>console.log("User updated successfully",data))
        .catch((err)=>console.log("An error occurred when trying to follow or unfollow: ",err))
    }
    const getTimeStamp = (date) => {
        const now = new Date();
        const then = new Date(date);

        const minutes = differenceInMinutes(now,then);
        const hour = differenceInHours(now,then);
        const day = differenceInDays(now,then);
        const week = differenceInWeeks(now,then);
        const month = differenceInMonths(now,then);
        const year = differenceInYears(now,then);

        if(year > 0) return `${year}yo`
        else if(month > 0) return `${month}mo`
        else if(week > 0) return `${week}w`
        else if(day > 0) return `${day}d`
        else if(hour > 0) return `${hour}h`
        else if(minutes > 1) return `${minutes}m`
        else return `now`

    }

    const [isFollowed,setIsFollowed] = useState(initial_status)
    return (
        <div className="notification-card">
            <Link to={`/users/${username}`} className="notification-user-img">
                <img src={profile_pic} alt="" />
            </Link>
            <div className="notification-info">
                <div className="notification-content">
                    <p><Link to={`/users/${username}`}>{username}</Link> started following you. <span className='text-gray-500' >{getTimeStamp(date)}</span></p>
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