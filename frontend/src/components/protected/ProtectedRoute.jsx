import React, { useEffect, useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { axiosQuery } from '../../utils/api';
import { AppContext } from '../../store/AppContext';

const ProtectedRoute = ({Component}) => {

  const navigate = useNavigate();
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [isLoading,setIsLoading] = useState(true);
  const {userDetails,setUserDetails} = useContext(AppContext)

  useEffect(()=>{
    const initializeApp = () => {
      axiosQuery.get('/initialize')
      .then((response)=>{
        const { initialData } = response.data
        // console.log("Initial data is: ",initialData);
        setUserDetails(initialData.payload)
        if(initialData.payload.role === "user"){
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
      // console.log(userDetails)
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
