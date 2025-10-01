import { createContext, useState } from "react";



const ThemeContext= createContext()

const ContextProvider=({children})=>{
    const [sidebar, setSidebar]= useState(false)



    const contextValue={
        sidebar, setSidebar,
        
    }
    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export default ContextProvider