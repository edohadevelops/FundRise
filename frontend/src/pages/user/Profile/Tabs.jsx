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
                campaigns.length > 0 ?
                campaigns.map((campaign)=>(
                    <div className='profile-campaign'>
                        <img src={campaign.campaign_img} alt="" />
                    </div>
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
                    <div className='profile-campaign'>
                        <img src={donation.campaign_img} alt="" />
                    </div>
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