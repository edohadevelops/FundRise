import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/Avatar.png';
import './style.css'

const Suggestion = ({user}) => {
  return (
    <div className="suggestion-card">
        <img src={Avatar} alt="user-profile" />
        <div className="suggestion-controls">
            <div className="suggestion-details">
                <p className="sugessted-user">{user}</p>
                <p className="suggested-text">Suggested for you</p>
            </div>
            <Link>follow</Link>
        </div>
    </div>
  )
}

export default Suggestion
