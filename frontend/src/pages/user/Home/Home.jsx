import React from 'react';
import { Link } from 'react-router-dom';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import * as routes from '../../../routes/routes';
import Avatar from '../../../assets/Avatar.png';
import './style.css';

const Home = () => {

    return (
        <div>
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
                    FILTER
                </div>
            </div>
            <div className="category-section">
                <p className="category-title">Category</p>
                <div className="category-links">
                    <div className="category-link">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home