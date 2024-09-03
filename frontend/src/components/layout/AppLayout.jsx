import React,{useContext, useState} from 'react'
import './style.css';
import Logo from '../../assets/Logo3.png'
import { Link, Outlet, ScrollRestoration } from 'react-router-dom';
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
import Suggestion from '../cards/suggestion/Suggestion';
import { AppContext } from '../../store/AppContext';



const AppLayout = () => {

  const [suggestedUsers,setSuggestedUsers] = useState([
    "ed0ha_",
    "closeupnigeria",
    "rccg_worldwide",
    "covenantuniversityota"
  ]);

  const { userDetails } = useContext(AppContext);

  return (
    <>
      {
        userDetails.onboarded ?
        <div className='page'>
          <nav className='page-sidebar'>
            <img className='sidebar-logo' src={Logo} alt='logo' />
            <div className="sidebar-content">
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
                  <Link className='side-link' to={routes.NOTIFICATIONS}>
                    <NotificationsActiveOutlinedIcon sx={{fontSize: "30px"}} />
                    <span className='side-link-text'>Notifications</span>
                  </Link>
                  {/* <Link className='side-link' to={routes.HISTORY}>
                    <HistoryOutlinedIcon sx={{fontSize: "30px"}} />
                    <span className='side-link-text'>History</span>
                  </Link> */}
                  <Link className='side-link' to={routes.MYPROFILE}>
                    <AccountCircleOutlinedIcon sx={{fontSize: "30px"}} />
                    <span className='side-link-text'>Profile</span>
                  </Link>
                  
              </div>
              <Link className='add-campaign-side'>
                <AddOutlinedIcon />
                <span>Campaign</span>  
              </Link>
              <Link className="sidebar-profile-actions">
                <img src={userDetails?.profile_picture} alt='profile-picture'/>
                <div className='flex justify-between w-full items-center'>
                  <div className="side-profile-details">
                    <p className="profile-name">{userDetails?.first_name + " " + userDetails?.last_name}</p>
                    <p className="profile-user">@{userDetails?.username}</p>
                  </div>
                  <MoreHorizOutlinedIcon className="side-profile-menu-icon" />
                </div>
              </Link>
            </div>
          </nav>
          <div className="main-content">
            <Outlet />
            {/* <ScrollRestoration 
              getKey={(location,matches)=>{
                return location.pathname
              }}
            /> */}
          </div>
          <div className="suggestions">
            <div className="search-section">
              <input type='text' placeholder="Seach for anything" /> 
            </div>
            <div className="suggestions-container">
              <p className="suggestion-title">Suggestions for you</p>
              <div className="suggestion-cards">
                {
                  suggestedUsers.map((user)=>(
                    <Suggestion user={user} />
                  ))
                }
              </div>
            </div>
          </div>
        </div> :
        <>
          {<Outlet />}
        </>
      }
    </>
  )
}

export default AppLayout
