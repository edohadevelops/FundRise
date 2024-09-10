import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../../utils/api';
import ArrowBack from '../../../../assets/BackIcon.svg';
import NoCampaign from '../../../../assets/NoDonationsIcon.svg';
import Card from '../../../../components/cards/Card';

const LikedCampaigns = () => {
    const axios = axiosInstance();

    const [campaigns,setCampaigns] = useState([]);
    useEffect(()=>{
        const getLikedCampaigns = () => {
            axios.get("/api/campaign/liked")
            .then(({data})=>{
                console.log("Liked campaigns is: ",data);
                setCampaigns(data.likedCampaigns)
            })
            .catch((err)=>{
                console.log("Error occurred getting campaigns")
            })
        }

        getLikedCampaigns()
    },[])
  return (
    <div className='relative'>
        <div className='post-page-header'>
                    <button className='post-back-btn' onClick={()=>history.back()}>
                    <img src={ArrowBack} alt="" />
                    </button>
                    <p>Liked Campaigns</p>
        </div>
        {
            campaigns.length === 0 ?
            <div className="donation-empty">
                <div className="donation-empty-content">
                    <div className="donation-empty-icon">
                        <img src={NoCampaign} alt="no donations error icon" />
                        </div>
                        <div className="donation-empty-text">
                        <p className="page-title">You have no liked campaigns yet..</p>
                        <p className="donation-empty-description">You have no liked campaigns currently<br />Come back later.</p>
                        </div>
                    </div>
            </div> :
            <div className="campaign-list">
                {
                    campaigns?.map((item,index)=>(
                        <Card 
                            details={item} 
                            index={index} 
                            // setModalDetails={setSelectedCampaign}
                            // setModal={setPostOpen}
                            isliked={item.hasUserLiked}
                            initialCount={item.totalLikes}
                        />
                    ))
                }
            </div>
        }
        
    </div>
  )
}

export default LikedCampaigns
