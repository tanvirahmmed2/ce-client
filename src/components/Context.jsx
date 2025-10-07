import { createContext, useState } from "react";
import axios from 'axios'
import { galleryData, latestnews, libraryData,  projectData, publicationsData } from "../Data";
import { useEffect } from "react";



export const ThemeContext = createContext()

const ContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false)
    const [news, setNews] = useState(latestnews)
    const [events, setEvents] = useState(null)
    const [gallery, setGallery] = useState(galleryData)
    const [messages, setMessages] = useState(null)
    const [notices, setNotices] = useState(null)
    const [library, setLibrary] = useState(libraryData)
    const [publications, setLPublications] = useState(publicationsData)
    const [projects, setProjects] = useState(projectData)
    const [user, setUser] = useState(null)
    const [admin, setAdmin] = useState(false)
    const [author, setAuthor] = useState(false)
    const [team, setTeam] = useState(null)




    // useEffect(()=>{
    //     const fetchUser=async()=>{
    //         try {
    //             const response= await axios.get('http://localhost:5000/api/user/protectedroute', {withCredentials:true})

    //             setUser(response.data.user)
    //             if(response.data.user.role ==='admin'){
    //                 setAdmin(true)
    //                 setAuthor(false)
    //             }
    //             else if(response.data.user.role ==='author'){
    //                 setAuthor(true)
    //                 setAdmin(false)
    //             }else{
    //                 setAdmin(false)
    //                 setAuthor(false)
    //             }

    //         } catch (error) {
    //             console.log(error)
    //             setUser(null)
    //             setAuthor(false)
    //             setAdmin(false)
    //         }
    //     }
    //     fetchUser()
    // },[])

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/event', { withCredentials: true })
                setEvents(response.data.payload)
            } catch (error) {

            }
        }
        fetchEvent()
    }, [])

    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/notice', { withCredentials: true })
                setNotices(response.data.payload)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNotice()
    }, [])

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
        user, setUser,
        author, setAuthor,
        team, setTeam

    }
    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export default ContextProvider