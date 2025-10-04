import { createContext, useState } from "react";
import { eventData, latestnews, libraryData, messageData, noticeData, projectData, publicationsData } from "../Data";



export const ThemeContext = createContext()

const ContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false)
    const [news, setNews] = useState(latestnews)
    const [events, setEvents] = useState(eventData)
    const [gallery, setGallery] = useState(null)
    const [messages, setMessages]= useState(messageData)
    const [notices, setNotices]= useState(noticeData)
    const [library, setLibrary]= useState(libraryData)
    const [publications, setLPublications]= useState(publicationsData)
    const [projects, setProjects]= useState(projectData)



    const contextValue = {
        sidebar, setSidebar,
        news, setNews,
        events, setEvents,
        gallery, setGallery,
        messages, setMessages,
        notices, setNotices,
        library, setLibrary,
        publications, setLPublications,
        projects, setProjects

    }
    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export default ContextProvider