import React, { createContext,useState } from 'react'

export const AppContext = createContext({});


const AppStore = ({children}) => {
    const [userDetails,setUserDetails] = useState(null);
    const [allCampaigns,setAllCampaigns] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false)

  return (
    <AppContext.Provider value={ {userDetails,setUserDetails,allCampaigns,setAllCampaigns,isAuthenticated,setIsAuthenticated} }>
        {children}
    </AppContext.Provider>
  )
}

export default AppStore
