import { createContext, useState } from "react";
import { eventData, latestnews, messageData } from "../Data";



export const ThemeContext = createContext()

const ContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false)
    const [news, setNews] = useState(latestnews)
    const [events, setEvents] = useState(eventData)
    const [gallery, setGallery] = useState(null)
    const [messages, setMessages]= useState(messageData)



    const contextValue = {
        sidebar, setSidebar,
        news, setNews,
        events, setEvents,
        gallery, setGallery,
        messages, setMessages,

    }
    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export default ContextProvider