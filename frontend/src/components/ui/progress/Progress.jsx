import React from 'react';
import './style.css'

const Progress = ({width}) => {
  return (
    <div className='progress-container'>
        <div className="progress-bar-percent" style={{
            width: width
        }}>

        </div>
    </div>
  )
}

export default Progress
