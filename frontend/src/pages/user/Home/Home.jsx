import React,{ useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import * as routes from '../../../routes/routes';
import Avatar from '../../../assets/Avatar.png';
// import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import './style.css';
import Card from '../../../components/cards/Card';
import { AppContext } from '../../../store/AppContext'
import { axiosInstance, axiosQuery } from '../../../utils/api';
import CampaignModal from '../../../components/modal/campaign/CampaignModal'

const Home = () => {

    const {userDetails,allCampaigns,setAllCampaigns} = useContext(AppContext);
    const [postOpen,setPostOpen] = useState(false);
    const axios = axiosInstance()
    const getCampaigns = () => {
        console.log("About to make request")
        axios.get("http://localhost:5000/api/campaign/getAll")
        .then(({data})=>{
          setAllCampaigns(data.campaigns)
        })
        .catch((error)=>{
          console.log(error)
        })
    }
    useEffect(()=>{
        getCampaigns();
    },[])

    const [selectedCampaign,setSelectedCampaign] = useState({});
    return (
        <>
            <div className="home">
                <div className="intro-section">
                    <div className="intro-details">
                        <p className="page-title">Hi, {userDetails?.first_name}</p>
                        <p className="intro-description">Let's start spreading Greatness</p>
                    </div>
                    <div className="intro-avatar">
                        <Link className='' to={routes.NOTIFICATIONS}>
                            <NotificationsActiveOutlinedIcon className='notification-icon' />
                        </Link>
                        <img src={userDetails?.profile_picture} className="home-profile-pic" alt="avatar.jpg" onClick={()=>setPostOpen(true)} />
                    </div>
                </div>
                <div className="filter-section">
                    <input type='text' placeholder="Seach for anything" />
                    <div className="category-filter">
                        All Categories
                    </div>
                </div>
                <div className="category-section">
                    <p className="category-title">Categories</p>
                    <div className="category-links">
                        <div className="category-link">
                            <div className="category-icon-div">
                                <AccountBalanceOutlinedIcon className="category-icon" />
                            </div>
                            <p>Medical</p>
                        </div>
                        <div className="category-link">
                            <div className="category-icon-div">
                                <AutoStoriesOutlinedIcon className="category-icon" />
                            </div>
                            <p>Education</p>
                        </div>
                        <div className="category-link">
                            <div className="category-icon-div">
                                <BusinessCenterOutlinedIcon className="category-icon" />
                            </div>
                            
                            <p>Business</p>
                        </div>
                        <div className="category-link">
                            <div className="category-icon-div">
                                <SportsSoccerOutlinedIcon className="category-icon" />
                            </div>
                            <p>Sports</p>
                        </div>
                        <div className="category-link">
                            <div className="category-icon-div">
                                <MoreHorizOutlinedIcon className="category-icon" />
                            </div>
                            
                            <p>See More</p>
                        </div>
                    </div>
                </div>
                <div className="trending-section">
                    <p className="trending-title">Trending Campaigns</p>
                    <div className="trending-results">
                        {
                            allCampaigns?.map((item,index)=>(
                                <Card 
                                    details={item} 
                                    index={index} 
                                    setCampaign={setSelectedCampaign}
                                    setModal={setPostOpen}
                                    isliked={item.hasUserLiked}
                                    initialCount={item.totalLikes}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            {
                postOpen &&
                <CampaignModal 
                    setModal={setPostOpen} 
                    campaign={selectedCampaign}

                />
            }
        </>
    )
}

export default Home