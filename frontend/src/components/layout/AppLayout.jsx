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
    <>
      <div className='page'>
        <nav className='page-sidebar'>
          <img src={Logo} alt='logo' />
          <div className="sidebar-links">
              <Link className='side-link' to={routes.HOME}>
                <HomeOutlinedIcon sx={{fontSize: "30px"}} />
                <span className='side-link-text'>Home</span>
              </Link>
              <Link className='side-link' to={routes.CAMPAIGNS}>
                <EmojiEventsOutlinedIcon sx={{fontSize: "30px"}} />
                <span className='side-link-text'>Campaigns</span>
              </Link>
              <Link className='side-link' to={routes.DONATIONS}>
                <VolunteerActivismOutlinedIcon sx={{fontSize: "30px"}} />
                <span className='side-link-text'>Donations</span>
              </Link>
              <Link className='side-notify side-link' to={routes.NOTIFICATIONS}>
                <NotificationsActiveOutlinedIcon sx={{fontSize: "30px"}} />
                <span className='side-link-text'>Notifications</span>
              </Link>
              <Link className='side-link' to={routes.HISTORY}>
                <HistoryOutlinedIcon sx={{fontSize: "30px"}} />
                <span className='side-link-text'>History</span>
              </Link>
              <Link className='side-link' to={routes.PROFILE}>
                <AccountCircleOutlinedIcon sx={{fontSize: "30px"}} />
                <span className='side-link-text'>Profile</span>
              </Link>
          </div>
        </nav>
        <div className="main-content">
          <Outlet />
        </div>
        <div className="suggestions">
          suggestions
        </div>
    </div>
    </>
  )
}

export default AppLayout
