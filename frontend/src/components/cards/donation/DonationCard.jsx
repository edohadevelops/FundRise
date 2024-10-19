import React, { useEffect } from 'react';
import './style.css';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import { formatter } from '../../../utils/numberFormatter'



const DonationCard = ({
    details,
    donationDetails,
    setModalDetails,
    setModal,
    index
}) => {
    const handleCampaignClick = () => {
        setModalDetails(donationDetails)
        setModal(true)
    }
    useEffect(()=>{
        console.log("Donation Details is: ",details)
    },[])
    const {status} = donationDetails
    // const status = "failed"
  return (
    <div className='donation-card' onClick={handleCampaignClick} key={index}>
      <div className="donation-card-header">
        <p className="donation-card-date">Fri Sept 21</p>
        <p className={`
            donation-card-status
            ${ 
                status === "success" ? 
                "donation-status-success" :
                status === "pending" ?
                "donation-status-pending" :
                "donation-status-failed"
            }
        `}>
            {status}
        </p>
      </div>
      <div className="donation-card-campaign">
        <div className="donation-card-img">
            <img src={details?.campaign_img} alt="" />
            <div className="card-badge">
                <LocalPoliceOutlinedIcon sx={{fontSize: "20px"}} />
                <p className="card-category">{details?.Category?.category_name}</p>
            </div>
        </div>
        <div className="donation-card-content">
            <div className="donation-card-details">
                <p className='donation-card-title'>Campaign Name</p>
                <p className='donation-card-value'>Tech Company Start up</p>

            </div>
            <div className="donation-card-details">
                <p className='donation-card-title'>Amount Donated</p>
                <p className='donation-card-value'>{formatter.format(donationDetails?.amount).replace("₦", "₦ ")}</p>
            </div>
            <div className="card-progress py-1 flex flex-col gap-2">
                <div className="card-timeline">
                    <HistoryOutlinedIcon />
                    <span>{details?.daysLeft}</span>
                </div>
                <div className="card-progress-bar">
                    <div className="progress-inner-bar" style={{width: `${details?.progressPercent && details?.progressPercent}%`}}></div>
                </div>
            </div>
            <div className="progress-rate">
                <p className="progress-value"><span>{formatter.format(details?.current_amount).replace("₦", "₦ ")}</span>/{formatter.format(details?.target_amount).replace("₦", "₦ ")}</p>
                <p className="progress-percent">{Math.floor(details?.progressPercent)}%</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DonationCard
