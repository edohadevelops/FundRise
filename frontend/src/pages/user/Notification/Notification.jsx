import React, { useEffect, useState } from 'react';
import NoNotification from '../../../assets/NoDonationsIcon.svg';
import ArrowBack from '../../../assets/BackIcon.svg'
import { axiosInstance } from '../../../utils/api';
import Cards from '../../../components/cards/notification/Notification';
import './style.css'

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
          <div className="notification-body">
            {
              notifications.todayNotifications.length > 0 && (
                <div className="notification-group">
                  <p className="notification-group-title">Today</p>
                  <div className="notification-group-list">
                    {
                      notifications?.todayNotifications.map((notification)=>{
                        if(notification.entity_type === "Like")
                          return <Cards.Like 
                                    profile_pic={notification.Sender.profile_picture} 
                                    username={notification.Sender.username}  
                                    campaign_image={notification.entity.Campaign.campaign_img} 
                                    campaign_id={notification.entity.Campaign.campaign_id}
                                    date={notification.createdAt} 
                                  />
                        else if(notification.entity_type === "Follow")
                          return <Cards.Follow 
                                    profile_pic={notification.Sender.profile_picture} 
                                    username={notification.Sender.username} 
                                    user_id={notification.Sender.user_id}
                                    initial_status={notification.entity.isUserFollowed ? true : false} 
                                    date={notification.createdAt} 
                                  />
                        else if(notification.entity_type === "Donation")
                          return <Cards.Donation 
                                    profile_pic={notification.Sender.profile_picture} 
                                    username={notification.Sender.username} 
                                    campaign_image={notification.entity.Campaign.campaign_img} 
                                    campaign_id={notification.entity.Campaign.campaign_id} 
                                    donation_amount={notification.entity.donation_amount} 
                                    donation_message={notification.entity.donation_message} 
                                    date={notification.createdAt} 
                                  />
                      })
                    }
                  </div>
                </div>
              )
            }
            {
              notifications.yesterdayNotifications.length > 0 && (
                <div className="notification-group">
                  <p className="notification-group-title">Yesterday</p>
                  <div className="notification-group-list">
                    {
                      notifications?.yesterdayNotifications.map((notification)=>{
                        if(notification.entity_type === "Like")
                          return <Cards.Like 
                                    profile_pic={notification.Sender.profile_picture} 
                                    username={notification.Sender.username}  
                                    campaign_image={notification.entity.Campaign.campaign_img} 
                                    campaign_id={notification.entity.Campaign.campaign_id}
                                    date={notification.createdAt} 
                                  />
                        else if(notification.entity_type === "Follow")
                          return <Cards.Follow 
                                    profile_pic={notification.Sender.profile_picture} 
                                    username={notification.Sender.username} 
                                    user_id={notification.Sender.user_id}
                                    initial_status={notification.entity.isUserFollowed ? true : false} 
                                    date={notification.createdAt} 
                                  />
                        else if(notification.entity_type === "Donation")
                          return <Cards.Donation 
                                    profile_pic={notification.Sender.profile_picture} 
                                    username={notification.Sender.username} 
                                    campaign_image={notification.entity.Campaign.campaign_img} 
                                    campaign_id={notification.entity.Campaign.campaign_id} 
                                    donation_amount={notification.entity.donation_amount} 
                                    donation_message={notification.entity.donation_message} 
                                    date={notification.createdAt} 
                                  />
                      })
                    }
                  </div>
                </div>
              )
            }
            {
              notifications.lastWeekNotifications.length > 0 && (
                <div className="notification-group">
                  <p className="notification-group-title">This Week</p>
                  <div className="notification-group-list">
                    {
                      notifications?.lastWeekNotifications.map((notification)=>{
                        if(notification.entity_type === "Like")
                          return <Cards.Like 
                                    profile_pic={notification.Sender.profile_picture} 
                                    username={notification.Sender.username}  
                                    campaign_image={notification.entity.Campaign.campaign_img} 
                                    campaign_id={notification.entity.Campaign.campaign_id}
                                    date={notification.createdAt} 
                                  />
                        else if(notification.entity_type === "Follow")
                          return <Cards.Follow 
                                    profile_pic={notification.Sender.profile_picture} 
                                    username={notification.Sender.username} 
                                    user_id={notification.Sender.user_id}
                                    initial_status={notification.entity.isUserFollowed ? true : false} 
                                    date={notification.createdAt} 
                                  />
                        else if(notification.entity_type === "Donation")
                          return <Cards.Donation 
                                    profile_pic={notification.Sender.profile_picture} 
                                    username={notification.Sender.username} 
                                    campaign_image={notification.entity.Campaign.campaign_img} 
                                    campaign_id={notification.entity.Campaign.campaign_id} 
                                    donation_amount={notification.entity.donation_amount} 
                                    donation_message={notification.entity.donation_message} 
                                    date={notification.createdAt}
                                  />
                      })
                    }
                  </div>
                </div>
              )
            }
            {
              notifications.earlierNotifications.length > 0 && (
                <div className="notification-group">
                  <p className="notification-group-title">Earlier</p>
                  <div className="notification-group-list">
                    {
                      notifications?.earlierNotifications.map((notification)=>{
                        if(notification.entity_type === "Like")
                          return <Cards.Like 
                                    profile_pic={notification.Sender.profile_picture} 
                                    username={notification.Sender.username}  
                                    campaign_image={notification.entity.Campaign.campaign_img} 
                                    campaign_id={notification.entity.Campaign.campaign_id}
                                    date={notification.createdAt} 
                                  />
                        else if(notification.entity_type === "Follow")
                          return <Cards.Follow 
                                    profile_pic={notification.Sender.profile_picture} 
                                    username={notification.Sender.username} 
                                    user_id={notification.Sender.user_id}
                                    initial_status={notification.entity.isUserFollowed ? true : false} 
                                    date={notification.createdAt} 
                                  />
                        else if(notification.entity_type === "Donation")
                          return <Cards.Donation 
                                    profile_pic={notification.Sender.profile_picture} 
                                    username={notification.Sender.username} 
                                    campaign_image={notification.entity.Campaign.campaign_img} 
                                    campaign_id={notification.entity.Campaign.campaign_id} 
                                    donation_amount={notification.entity.donation_amount} 
                                    donation_message={notification.entity.donation_message}
                                    date={notification.createdAt} 
                                  />
                      })
                    }
                  </div>
                </div>
              )
            }
          </div>
        
        </div>
      }
      
      
    </>
  )
}

export default Notification
