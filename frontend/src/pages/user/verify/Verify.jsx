import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

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
    <div className='flex h-[100vh] w-full items-center justify-center'>
      {
        donationStatus === "success" ?
        <p className='text-[#187070] text-3xl font-bold italic text-center'>
            Transfer was successful...
        </p>:
        donationStatus === "fail" ?
        <p className='text-red-400 text-3xl font-bold text-center'>
            Transfer failed....
        </p>:
        "...Loading"
      }
    </div>
  )
}

export default Verify
