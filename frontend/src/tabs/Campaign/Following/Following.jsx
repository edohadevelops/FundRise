import React from 'react';
import Card from '../../../components/cards/Card';

const Following = ({campaigns}) => {
  return (
    <>
      {
        campaigns?.map((campaign,index)=>(
            <Card details={campaign} index={index} isliked={campaign.hasUserLiked} initialCount={campaign.totalLikes}/>
        ))
      }
    </>
  )
}

export default Following
