
import './style.css'
import SuccessIcon from '../../../assets/success-icon.png'
import FailIcon from '../../../assets/fail-icon.png'
import User from '../../../assets/ProfilePicture.png';
import CampaignIcon from '@mui/icons-material/Campaign';
import Campaign from '../../../assets/CampaignImg.webp'
import ArrowBack from '../../../assets/BackIcon.svg'

import { Link } from 'react-router-dom';

const Loading = () => {

    return (
        <div className='flex h-[100vh] w-full items-center justify-center'>
            <p className="">Loading...</p>
        </div>
    )
}

const Success = () => {

    return (
        <div className='reciept-page'>
            <div className="reciept">
                {/* <p className="reciept-title">Payment Successful</p> */}
                <div className="reciept-header">
                    <img className='reciept-icon' src={SuccessIcon} alt="" />
                    <div className="reciept-donation-details">
                        <p className="reciept-donation-title">Donate to help millions</p>
                        <p className="reciept-donation-description">Your donation of 150,000 has been well recieved!</p>
                    </div>
                    {/* <Link className='reciept-back-btn'>
                        <img src={ArrowBack} alt="" />
                        <p>Back to Home</p>
                    </Link> */}
                </div>
                <div className="reciept-body-footer">
                    <div className="reciept-body">
                        <div className="reciept-user">
                            <img src={Campaign} alt="" />
                        </div>
                        <div className="reciept-comment">
                            <p>Your donation of N 150,000 was successful. This would aid in helping us reach our goal of building a new city much more faster.</p>
                            <CampaignIcon className='reciept-speaker-icon' sx={{color: "#6d6a6a"}} />
                        </div>
                    </div>
                    <div className="reciept-footer">
                        <div className="reciept-footer-content">
                            <p className="reciept-transaction-title">Transaction Summary</p>
                            <div className="reciept-transaction-details">
                                <div className="reciept-transaction-group">
                                    <p className="reciept-transaction-label">Transaction Reference: </p>
                                    <p className="reciept-transaction-value">12ref54</p>
                                </div>
                                <div className="reciept-transaction-group">
                                    <p className="reciept-transaction-label">Transaction Amount: </p>
                                    <p className="reciept-transaction-value">N 150,000.00</p>
                                </div>
                                <div className="reciept-transaction-group">
                                    <p className="reciept-transaction-label">Current Amount: </p>
                                    <p className="reciept-transaction-value">N 170,000.00</p>
                                </div>
                                <div className="reciept-transaction-group">
                                    <p className="reciept-transaction-label">Target Amount: </p>
                                    <p className="reciept-transaction-value">N 350,000.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="reciept-transaction-actions">
                            <Link to={"/"} className='reciept-btn-back'>
                                <p>Back to Home</p>
                            </Link>
                            <Link to={"/donate/18"} className='reciept-btn-status'>
                                <p>Donate again</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Fail = () => {

    return (
        <div className='reciept-page'>
            <div className="reciept">
                {/* <p className="reciept-title">Payment Successful</p> */}
                <div className="reciept-header">
                    <img className='reciept-icon' src={FailIcon} alt="" />
                    <div className="reciept-donation-details">
                        <p className="reciept-donation-title">Donate to help millions</p>
                        <p className="reciept-donation-description">Your donation of 150,000 was unsuccessful</p>
                    </div>
                    {/* <Link className='reciept-back-btn'>
                        <img src={ArrowBack} alt="" />
                        <p>Back to Home</p>
                    </Link> */}
                </div>
                <div className="reciept-body-footer">
                    <div className="reciept-body">
                        <div className="reciept-user">
                            <img src={Campaign} alt="" />
                            {/* <div className="reciept-user-details">
                                <p className="reciept-user-name">Amen Edoha</p>
                                <p className="reciept-user-status">Owner</p>
                            </div> */}
                        </div>
                        <div className="reciept-comment">
                            <p>It's a shame your transaction could not be completed, Please try again as your donation would be very vital to us</p>
                            <CampaignIcon className='reciept-speaker-icon' sx={{color: "#6d6a6a"}} />
                        </div>
                    </div>
                    <div className="reciept-footer">
                        <div className="reciept-footer-content">
                            <p className="reciept-transaction-title">Transaction Summary</p>
                            <div className="reciept-transaction-details">
                                <div className="reciept-transaction-group">
                                    <p className="reciept-transaction-label">Transaction Reference: </p>
                                    <p className="reciept-transaction-value">12ref54</p>
                                </div>
                                <div className="reciept-transaction-group">
                                    <p className="reciept-transaction-label">Transaction Status: </p>
                                    <p className="reciept-transaction-value">Failed</p>
                                </div>
                                <div className="reciept-transaction-group">
                                    <p className="reciept-transaction-label">Current Amount: </p>
                                    <p className="reciept-transaction-value">N 15,000.00</p>
                                </div>
                                <div className="reciept-transaction-group">
                                    <p className="reciept-transaction-label">Target Amount: </p>
                                    <p className="reciept-transaction-value">N 180,000.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="reciept-transaction-actions">
                            <Link to={"/"} className='reciept-btn-back'>
                                <p>Back to Home</p>
                            </Link>
                            <Link to={"/donate/18"} className='reciept-btn-status'>
                                <p>Donate again</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default {
    Loading,
    Success,
    Fail
}