import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import VerificationViews from './Views';

const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const [ donationStatus, setStatus ] = useState(false)
     useEffect(()=>{
        const reference = searchParams.get("reference");
        console.log(reference);

        const getDonationStatus = () => {
            axios.get(`${process.env.BASE_URL}/api/donation/verify/${reference}`)
            .then(({data})=>{
                console.log(data);
                if(data.status === "success"){
                    setStatus("success")
                }
            })
            .catch((errr)=>{
                console.log("Err occured")
            })
        }
        getDonationStatus()
     },[])
  return (
    <>
      {
        donationStatus === "success" ?
        <VerificationViews.Success /> :
        donationStatus === "fail" ?
        <VerificationViews.Fail /> :
        <VerificationViews.Loading />
      }
    </>
  )
}

export default Verify
