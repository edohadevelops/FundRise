import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                campaigns.length > 0 ?
                campaigns.map((campaign)=>(
                    <Link to={`/campaigns/${campaign?.campaign_id}`} className='profile-campaign'>
                        <img src={campaign.campaign_img} alt="" />
                    </Link>
                )):
                <div className='h-[300px] w-full flex items-center justify-center'>
                    <p className="font-semibold text-lg">No Campaigns yet</p>
                </div>
            }
        </>
    )
}

const Donations = ({donations,isDonationsLoading}) => {

    return (
        <>
            {
                isDonationsLoading ?
                <>
                    <div className="content-loading">Loading...</div>
                </> :
                donations.length > 0 ?
                donations.map((donation)=>(
                    <Link to={`/campaigns/${donation?.Campaign.campaign_id}`} className='profile-campaign'>
                        <img src={donation?.Campaign.campaign_img} alt="" />
                    </Link>
                )):
                <div className='h-[300px] w-full flex items-center justify-center'>
                    <p className="font-semibold text-lg">No Donations yet</p>
                </div>
            }
        </>
    )
}

export default {
    Campaigns,
    Donations
}