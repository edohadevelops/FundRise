import React, { useEffect } from 'react'
import { axiosInstance } from '../../../../utils/api'

const LikedCampaigns = () => {
    const axios = axiosInstance()
    useEffect(()=>{
        const getLikedCampaigns = () => {
            axios.get("/api/campaign/liked")
            .then(({data})=>{
                console.log("Liked campaigns is: ",data)
            })
            .catch((err)=>{
                console.log("Error occurred getting campaigns")
            })
        }

        getLikedCampaigns()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default LikedCampaigns
