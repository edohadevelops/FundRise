import React from 'react';
import './style.css'

const Home = () => {

    return (
        <div>
            <div className="intro-section">
                <p className="intro-greeting">Hi, Edoha</p>
                <p className="intro-description">Let's start spreading Greatness</p>
            </div>
            <div className="filter-section">
                <input type='text' placeholder="Seach for anything" />
                <div className="category-filter">

                </div>
            </div>
        </div>
    )
}

export default Home