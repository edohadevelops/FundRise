
import './style.css'
import SuccessIcon from '../../../assets/success-icon.png'
import User from '../../../assets/ProfilePicture.png';
import CampaignIcon from '@mui/icons-material/Campaign';

const Loading = () => {

    return (
        <div className='flex h-[100vh] w-full items-center justify-center'>
            <p className="">Loading...</p>
        </div>
    )
}

const Success = () => {

    return (
        <div className='success-page'>
            <div className="success-reciept">
                {/* <p className="success-title">Payment Successful</p> */}
                <div className="success-reciept-header">
                    <img src={SuccessIcon} alt="" />
                    <div className="success-donation-details">
                        <p className="success-donation-title">Donate to help millions</p>
                        <p className="success-donation-description">Your donation of 150,000 has been well recieved!</p>
                    </div>
                </div>
                <div className="success-reciept-body">
                    <div className="success-reciept-user">
                        <img src={User} alt="" />
                        <p className="success-user-name">Amen Edoha</p>
                        <p className="success-user-status">Owner</p>
                    </div>
                    <div className="success-reciept-comment">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, mollitia? Corporis maiores adipisci laborum fugiat eum? Doloremque accusantium nemo.</p>
                        <CampaignIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Fail = () => {

    return (
        <div className='flex h-[100vh] w-full items-center justify-center'>
            <p className="text-red-400 text-3xl font-bold text-center">Failed Transaction</p>
        </div>
    )
}

export default {
    Loading,
    Success,
    Fail
}