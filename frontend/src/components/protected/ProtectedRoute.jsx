import React, { useEffect, useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { axiosInstance, axiosQuery } from '../../utils/api';
import { AppContext } from '../../store/AppContext';
// import { refreshAllCampaigns } from '../../utils/campaigns';

const ProtectedRoute = ({Component}) => {

  // const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(true);
  const {userDetails,setUserDetails,setAllCampaigns,isAuthenticated,setIsAuthenticated} = useContext(AppContext)

  const axios = axiosInstance();

  useEffect(()=>{
    const initializeApp = () => {
      axios.get('/api/initialize')
      .then((response)=>{
        const { initialData } = response.data
        console.log("Initial data is: ",initialData);
        setUserDetails(initialData)
        if(initialData.role === "user"){
          setIsAuthenticated(true)
        }
      })
      .catch((error)=>{
        console.error(error);  
        // navigate("/login")
      })
      .finally(()=>{        
        setIsLoading(false)
      })
    }
    
    if(userDetails){
      setIsLoading(false);
      setIsAuthenticated(true)
      
    }else{
      initializeApp();
    }
  },[userDetails])

  return (
    <>
      {
        isLoading ? 
        "":
        isAuthenticated ? 
        <Component /> :
        <Navigate to="/login" />
      }
    </>
  )
}

export default ProtectedRoute
