import React, { useEffect, useState } from 'react';
import NoNotification from '../../../assets/NoDonationsIcon.svg';
import ArrowBack from '../../../assets/BackIcon.svg'
import { axiosInstance } from '../../../utils/api';
import Cards from '../../../components/cards/notification/Notification';

const Notification = () => {
  const axios = axiosInstance();
  const [notifications,setNotifications] = useState(null)

  useEffect(()=>{
    const getNotifications = () => {
      axios.get("/api/notification/getAll")
      .then(({data})=> {
        console.log("Notifications is: ",data)
        setNotifications(data.myNotifications)
      })
      .catch((err)=>console.log("Error is: ",err))
    }
    getNotifications()
  },[])
  return (
    <>
      {
        !notifications ? 
        <div className="donation-empty">
          <div className="donation-empty-content">
            <div className="donation-empty-icon">
              <img src={NoNotification} alt="no donations error icon" />
            </div>
            <div className="donation-empty-text">
              <p className="page-title">You have no notifications yet..</p>
              <p className="donation-empty-description">You have no notifications currently<br />Come back later.</p>
            </div>
          </div>
        </div> : 
        <div className="notification-page">
          <div className='post-page-header'>
          <button className='post-back-btn' onClick={()=>history.back()}>
            <img src={ArrowBack} alt="" />
          </button>
          <p>Notifications</p>

        </div>
        <div className="notification-group">
          <p className="notification-group-title">Today</p>
          <div className="notification-group-list">
            {
              notifications?.map((notification)=>{
                if(notification.entity_type === "Like")
                  return <Cards.Like profile_pic={notification.User.profile_picture} username={notification.User.username} campaign_image={notification.entity.Campaign.campaign_img}/>
                else if(notification.entity_type === "Follow")
                  return <Cards.Follow profile_pic={notification.User.profile_picture} username={notification.User.username} />
                else if(notification.entity_type === "Donation")
                  return <Cards.Donation profile_pic={notification.User.profile_picture} username={notification.User.username} campaign_image={notification.entity.Campaign.campaign_img} donation_amount={notification.entity.donation_amount} />
              })
            }
          </div>
        </div>
        <div className="notification-group">
          <p className="notification-group-title">Yesterday</p>
          <div className="notification-group-list">
            {
              notifications?.map((notification)=>{
                if(notification.entity_type === "Like")
                  return <Cards.Like profile_pic={notification.User.profile_picture} username={notification.User.username} campaign_image={notification.entity.Campaign.campaign_img}/>
                else if(notification.entity_type === "Follow")
                  return <Cards.Follow profile_pic={notification.User.profile_picture} username={notification.User.username}/>
                else if(notification.entity_type === "Donation")
                  return <Cards.Donation profile_pic={notification.User.profile_picture} username={notification.User.username} campaign_image={notification.entity.Campaign.campaign_img} donation_amount={notification.entity.donation_amount} />
              })
            }
          </div>
        </div>
        <div className="notification-group">
          <p className="notification-group-title">Last week</p>
          <div className="notification-group-list">
            {
              notifications?.map((notification)=>{
                if(notification.entity_type === "Like")
                  return <Cards.Like profile_pic={notification.User.profile_picture} username={notification.User.username} campaign_image={notification.entity.Campaign.campaign_img}/>
                else if(notification.entity_type === "Follow")
                  return <Cards.Follow profile_pic={notification.User.profile_picture} username={notification.User.username} />
                else if(notification.entity_type === "Donation")
                  return <Cards.Donation profile_pic={notification.User.profile_picture} username={notification.User.username} campaign_image={notification.entity.Campaign.campaign_img} donation_amount={notification.entity.donation_amount} />
              })
            }
          </div>
        </div>
        </div>
      }
      
      
    </>
  )
}

export default Notification
