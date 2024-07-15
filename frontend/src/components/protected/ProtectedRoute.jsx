import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { axiosQuery } from '../../utils/api';

const ProtectedRoute = ({Component}) => {

  const navigate = useNavigate();
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    const initializeApp = () => {
      axiosQuery.get('/initialize')
      .then((response)=>{
        const { data } = response
        console.log("Initial data is: ",response.data)
        if(data.initialData.role === "user"){
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
    initializeApp();
  },[])

  const token = localStorage.getItem("token")
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
