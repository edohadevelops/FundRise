
import './style.css'
import SuccessIcon from '../../../assets/success-icon.png'
import User from '../../../assets/ProfilePicture.png';
import CampaignIcon from '@mui/icons-material/Campaign';
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
                            <img src={User} alt="" />
                            <div className="reciept-user-details">
                                <p className="reciept-user-name">Amen Edoha</p>
                                <p className="reciept-user-status">Owner</p>
                            </div>
                        </div>
                        <div className="reciept-comment">
                            <p>! really appreciate your donation of 150,000 and i want you to know that this would aid in helping us reach our goal much more faster. God bless you</p>
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
                                    <p className="reciept-transaction-label">Donation Id: </p>
                                    <p className="reciept-transaction-value">12</p>
                                </div>
                                <div className="reciept-transaction-group">
                                    <p className="reciept-transaction-label">Transaction Amount: </p>
                                    <p className="reciept-transaction-value">N 150,000.00</p>
                                </div>
                                <div className="reciept-transaction-group">
                                    <p className="reciept-transaction-label">Transaction Status: </p>
                                    <p className="reciept-transaction-value">Success</p>
                                </div>
                            </div>
                        </div>
                        <div className="reciept-transaction-actions">
                            <Link className='reciept-btn-back'>
                                <p>Back to Home</p>
                            </Link>
                            <Link className='reciept-btn-status'>
                                <p>Save Payment</p>
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
        <div className='reciept-page bg-red-200'>
            <div className="reciept">
                {/* <p className="reciept-title">Payment Successful</p> */}
                <div className="reciept-header">
                    <img className='reciept-icon' src={SuccessIcon} alt="" />
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
                            <img src={User} alt="" />
                            <div className="reciept-user-details">
                                <p className="reciept-user-name">Amen Edoha</p>
                                <p className="reciept-user-status">Owner</p>
                            </div>
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
                                    <p className="reciept-transaction-label">Donation Id: </p>
                                    <p className="reciept-transaction-value">12</p>
                                </div>
                                <div className="reciept-transaction-group">
                                    <p className="reciept-transaction-label">Transaction Amount: </p>
                                    <p className="reciept-transaction-value">N 150,000.00</p>
                                </div>
                                <div className="reciept-transaction-group">
                                    <p className="reciept-transaction-label">Transaction Status: </p>
                                    <p className="reciept-transaction-value">Failed</p>
                                </div>
                            </div>
                        </div>
                        <div className="reciept-transaction-actions">
                            <Link className='reciept-btn-back'>
                                <p>Back to Home</p>
                            </Link>
                            <Link className='reciept-btn-status'>
                                <p>Retry Payment</p>
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