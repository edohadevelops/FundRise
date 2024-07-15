import React, { createContext,useState } from 'react'

export const AppContext = createContext({});


const AppStore = ({children}) => {
    const [userDetails,setUserDetails] = useState(null);

  return (
    <AppContext.Provider value={ {userDetails,setUserDetails} }>
        {children}
    </AppContext.Provider>
  )
}

export default AppStore
