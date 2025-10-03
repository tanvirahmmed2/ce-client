import { createContext, useState } from "react";
import { eventData, latestnews } from "../Data";



export const ThemeContext= createContext()

const ContextProvider=({children})=>{
    const [sidebar, setSidebar]= useState(false)
    const [news, setNews]= useState(latestnews)
    const [events, setEvents]= useState(eventData)



    const contextValue={
        sidebar, setSidebar,
        news, setNews,
        events, setEvents,

    }
    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export default ContextProvider