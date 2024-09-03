import { Link } from 'react-router-dom'
import './style.css'

const Donation = ({ username,profile_pic,donation_amount,donation_message,campaign_image,campaign_id }) => {
    return (
        <div className="notification-card">
            <Link to={`/users/${username}`} className="notification-user-img">
                <img src={profile_pic} alt="" />
            </Link>
            <div className="notification-content">
                <p><Link to={`/users/${username}`}>{username}</Link> made a donation of <span className='font-semibold'>N{donation_amount}</span> to your campaign: "I'm pleased to be ablee to donate to this cause</p>
            </div>
            <Link to={`/campaigns/${campaign_id}`} className="notification-campaign-img">
                <img src={campaign_image} alt="" />
            </Link>

        </div>
    )

}

const Like = ({ username,profile_pic,campaign_image,campaign_id }) => {
    return (
        <div className="notification-card">
            <Link to={`/users/${username}`} className="notification-user-img">
                <img src={profile_pic} alt="" />
            </Link>
            <div className="notification-content">
                <p><Link to={`/users/${username}`}>{username}</Link> liked your campaign</p>
            </div>
            <Link to={`/campaigns/${campaign_id}`} className="notification-campaign-img">
                <img src={campaign_image} alt="" />
            </Link>

        </div>
    )

}

const Follow = ({ username,profile_pic,campaign_image }) => {
    return (
        <div className="notification-card">
            <Link to={`/users/${username}`} className="notification-user-img">
                <img src={profile_pic} alt="" />
            </Link>
            <div className="notification-content">
                <p><Link to={`/users/${username}`}>{username}</Link> started following you.</p>
            </div>
            <button className="notification-follow-button">
                Follow
            </button>

        </div>
    )

}


export default {
    Follow,
    Like,
    Donation
}