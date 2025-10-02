import { createContext, useState } from "react";
import { latestnews } from "../Data";



export const ThemeContext= createContext()

const ContextProvider=({children})=>{
    const [sidebar, setSidebar]= useState(false)
    const [news, setNews]= useState(latestnews)



    const contextValue={
        sidebar, setSidebar,
        news, setNews,

    }
    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export default ContextProvider