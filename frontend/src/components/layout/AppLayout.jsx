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
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Avatar from '../../assets/Avatar.png';



const AppLayout = () => {

  return (
    <>
      <div className='page'>
        <nav className='page-sidebar'>
          <img className='sidebar-logo' src={Logo} alt='logo' />
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
              <Link className='add-campaign-side'>
                <AddOutlinedIcon />
                <span>Campaign</span>  
              </Link>
          </div>
          <Link className="sidebar-profile-actions">
            <img src={Avatar} alt='profile-picture'/>
            <div className="side-profile-details">
              <p className="profile-name">Amen Edoha</p>
              <p className="profile-user">@edohaTheDev</p>
            </div>
            <MoreHorizOutlinedIcon className="side-profile-menu-icon" />
          </Link>
        </nav>
        <div className="main-content">
          <Outlet />
        </div>
        <div className="suggestions">
          <div className="search-section">
            <input type='text' placeholder="Seach for anything" /> 
          </div>
        </div>
    </div>
    </>
  )
}

export default AppLayout
