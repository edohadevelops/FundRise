import React from 'react';
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

const Home = () => {

    return (
        <div className="home">
            <div className="intro-section">
                <div className="intro-details">
                    <p className="intro-greeting">Hi, Edoha</p>
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
        </div>
    )
}

export default Home