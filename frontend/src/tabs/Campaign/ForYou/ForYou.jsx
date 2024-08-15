import React from 'react';
import Card from '../../../components/cards/Card'

const ForYou = ({campaigns}) => {
  return (
    <>
        For you
      {
        campaigns?.map((campaign,index)=>(
            <Card details={campaign} index={index} isliked={campaign.Likes.length > 0} initialCount={campaign.totalLikes}/>
        ))
      }
    </>
  )
}

export default ForYou
