import { createContext, useState } from 'react'

export const userContext=createContext()

export default function Context({children}) {
    const [user,setUser]=useState(null)
    return(
<userContext.Provider value={{user,setUser}}>
    {children}
</userContext.Provider>
    )

}
