import React, { createContext,useState } from 'react'

export const AppContext = createContext({});


const AppStore = ({children}) => {
    const [userDetails,setUserDetails] = useState(null);
    const [allCampaigns,setAllCampaigns] = useState(null)

  return (
    <AppContext.Provider value={ {userDetails,setUserDetails,allCampaigns,setAllCampaigns} }>
        {children}
    </AppContext.Provider>
  )
}

export default AppStore
