import { createContext, useState } from "react";
import axios from 'axios'
import { eventData, galleryData, latestnews, libraryData, noticeData, projectData, publicationsData } from "../Data";
import { useEffect } from "react";



export const ThemeContext = createContext()

const ContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false)
    const [news, setNews] = useState(latestnews)
    const [events, setEvents] = useState(eventData)
    const [gallery, setGallery] = useState(galleryData)
    const [messages, setMessages]= useState(null)
    const [notices, setNotices]= useState(noticeData)
    const [library, setLibrary]= useState(libraryData)
    const [publications, setLPublications]= useState(publicationsData)
    const [projects, setProjects]= useState(projectData)
    const [users, setUsers]= useState(null)
    const [user, setUser]= useState(null)
    const [admin, setAdmin]= useState(false)
    

    useEffect(()=>{
        const fetchUsers=async()=>{
            try {
            const response = await axios.get('http://localhost:5000/api/user/getusers')
            setUsers(response.data.payload)
        } catch (error) {
            console.log(error)
        }
        }
        fetchUsers()
    },[])


    const contextValue = {
        sidebar, setSidebar,
        news, setNews,
        events, setEvents,
        gallery, setGallery,
        messages, setMessages,
        notices, setNotices,
        library, setLibrary,
        publications, setLPublications,
        projects, setProjects,
        admin, setAdmin,
        users, setUsers,
        user, setUser

    }
    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export default ContextProvider