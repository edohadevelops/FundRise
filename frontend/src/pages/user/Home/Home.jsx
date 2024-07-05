import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import * as routes from '../../../routes/routes';
import Avatar from '../../../assets/Avatar.png';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import './style.css';
import Card from '../../../components/cards/Card';

const Home = () => {

    const [campaignItems,setCampaignItems] = useState([
        {
            title: "Kemi's University Tuition",
            category: "Education",
            daysLeft: 2,
            currentAmmount: "50,000",
            totalAmount: "100,000",
            progressPercent: 20,
            totalDonators: 4,
            username: "edohaTheDev",
            totalLikes: 1203
        },
        {
            title: "Dorcas Memorial Fund",
            category: "Memorial",
            daysLeft: 5,
            currentAmmount: "100,000",
            totalAmount: "150,000",
            progressPercent: 60,
            totalDonators: 10,
            username: "uprisenigeria",
            totalLikes: 50
        },
        {
            title: "Robotic School For Kids",
            category: "Education",
            daysLeft: 20,
            currentAmmount: "300,000",
            totalAmount: "400,000",
            progressPercent: 70,
            totalDonators: 8,
            username: "jameson",
            totalLikes: 400
        }
    ])
    // useEffect(()=>{
    //     console.log("Campaign items:", Card)
    // },[])
    return (
        <div className="home">
            <div className="intro-section">
                <div className="intro-details">
                    <p className="page-title">Hi, Edoha</p>
                    <p className="intro-description">Let's start spreading Greatness</p>
                </div>
                <div className="intro-avatar">
                    <Link className='' to={routes.NOTIFICATIONS}>
                        <NotificationsActiveOutlinedIcon className='notification-icon' />
                    </Link>
                    <img src={Avatar} alt="avatar.jpg" />
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
                        campaignItems.map((item,index)=>(
                            <Card details={item} index={index} />
                        ))
                    }
                    {
                        campaignItems.map((item,index)=>(
                            <Card details={item} index={index} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Home