import React,{useContext, useState} from 'react'
import './style.css';
import Logo from '../../assets/Logo3.png'
import { Link, Outlet, ScrollRestoration, useNavigate } from 'react-router-dom';
import * as routes from '../../routes/routes';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Suggestion from '../cards/suggestion/Suggestion';
import { AppContext } from '../../store/AppContext';



const AppLayout = () => {
  const { userDetails,setIsAuthenticated } = useContext(AppContext);

  const [isMenuOpen,setMenuOpen] = useState(false)

  const handleMenu = (event) => {
    event.stopPropagation();

    setMenuOpen(prev => !prev)
  }

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile")
  }
  const handleLikeClick = (e) => {
    e.stopPropagation();
    navigate("/myLiked")
  }

  const handleLogOut = (e) => {
    e.stopPropagation()
    localStorage.removeItem("token");
    window.location.href = "/login"
    setIsAuthenticated(false)
    
  }

  const [suggestedUsers,setSuggestedUsers] = useState([
    "ed0ha_",
    "closeupnigeria",
    "rccg_worldwide",
    "covenantuniversityota"
  ]);

  

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
              <button onClick={handleProfileClick} className="sidebar-profile-actions">
                <img src={userDetails?.profile_picture} alt='profile-picture'/>
                <div className='flex justify-between w-full items-center'>
                  <div className="side-profile-details">
                    <p className="profile-name">{userDetails?.first_name + " " + userDetails?.last_name}</p>
                    <p className="profile-user">@{userDetails?.username}</p>
                  </div>
                  <button onClick={handleMenu}>
                    <MoreHorizOutlinedIcon className="side-profile-menu-icon" />
                  </button>
                </div>
                {
                  isMenuOpen &&
                  <div className="sidebar-menu-options">
                    <div className='flex flex-col gap-2 border-b-2 pb-2'>
                      <button onClick={handleLikeClick}><FavoriteBorderOutlinedIcon /> Favourites</button>
                      <Link><SettingsOutlinedIcon /> Settings</Link>
                    </div>
                    <button onClick={handleLogOut}> <LogoutOutlinedIcon /> Log out</button>
                  </div>
                }
              </button>
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
