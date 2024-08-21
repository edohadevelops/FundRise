import React, { useEffect } from 'react';
// import { axiosInstance } from '../../../utils/api';

const Campaigns = ({campaigns,isCampaignLoading}) => {


    // const [campaigns,setCampaigns]

    useEffect(()=>{
        console.log("Campaigns in campaign tab is: ",campaigns)
    },[campaigns])
    return (
        <>
            {
                isCampaignLoading ?
                <>
                    <div className="content-loading">Loading...</div>
                </> :
                campaigns.map((campaign)=>(
                    <div className='profile-campaign'>
                        <img src={campaign.campaign_img} alt="" />
                    </div>
                ))
            }
        </>
    )
}

const Donations = () => {

    return (
        <>
            Donations
        </>
    )
}

export default {
    Campaigns,
    Donations
}