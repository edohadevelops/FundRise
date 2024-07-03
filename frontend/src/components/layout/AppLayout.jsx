import React from 'react'
import './style.css';
import Logo from '../../assets/Logo3.png'
import { Link, Outlet } from 'react-router-dom';
import * as routes from '../../routes/routes';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const AppLayout = () => {

  return (
    <div className='page'>
      <nav className='page-sidebar'>
        <img src={Logo} alt='logo' />
        <div className="sidebar-links">
            <Link to={routes.HOME}><HomeOutlinedIcon /> Home</Link>
            <Link to={routes.CAMPAIGNS}><EmojiEventsOutlinedIcon /> Campaigns</Link>
            <Link to={routes.DONATIONS}><VolunteerActivismOutlinedIcon /> Donations</Link>
            <Link to={routes.NOTIFICATIONS}><NotificationsActiveOutlinedIcon /> Notifications</Link>
            <Link to={routes.HISTORY}><HistoryOutlinedIcon /> History</Link>
            <Link to={routes.PROFILE}><AccountCircleOutlinedIcon /> Profile</Link>
        </div>
      </nav>
      <div className="main-content">
        <Outlet />
      </div>
      <div className="suggestions">
        suggestions
      </div>
    </div>
  )
}

export default AppLayout
