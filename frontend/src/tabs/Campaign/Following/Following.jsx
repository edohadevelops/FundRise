import React from 'react';
import Card from '../../../components/cards/Card';

const Following = ({campaigns}) => {
  return (
    <>
        Following
      {
        campaigns?.map((campaign,index)=>(
            <Card details={campaign} index={index}/>
        ))
      }
    </>
  )
}

export default Following
