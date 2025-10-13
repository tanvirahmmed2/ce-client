import { createContext, useState } from "react";
import axios from 'axios'
import { } from "../Data";
import { useEffect } from "react";



export const ThemeContext = createContext()

const ContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false)
    const [update, setUpdate] = useState([])
    const [events, setEvents] = useState([])
    const [gallery, setGallery] = useState([])
    const [messages, setMessages] = useState([])
    const [notices, setNotices] = useState([])
    const [publications, setLPublications] = useState([])
    const [projects, setProjects] = useState([])
    const [user, setUser] = useState([])
    const [users, setUsers] = useState([])
    const [admin, setAdmin] = useState(false)
    const [author, setAuthor] = useState(false)
    const [team, setTeam] = useState([])




    useEffect(()=>{
        const fetchUser=async()=>{
            try {
                const response= await axios.get('http://localhost:5000/api/user/protectedroute', {withCredentials:true})

                setUser(response.data.user)
                if(response.data.user.role ==='admin'){
                    setAdmin(true)
                    setAuthor(false)
                }
                else if(response.data.user.role ==='author'){
                    setAuthor(true)
                    setAdmin(false)
                }else{
                    setAdmin(false)
                    setAuthor(false)
                }

            } catch (error) {
                console.log(error.response)
                setUser(null)
                setAuthor(false)
                setAdmin(false)
            }
        }
        fetchUser()
    },[])


    
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
        const fetchTeam = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/team', { withCredentials: true })
                setTeam(response.data.payload)
            } catch (error) {
                console.log(error.response)
            }
        }
        fetchTeam()
    }, [])


    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/notice', { withCredentials: true })
                setNotices(response.data.payload)
            } catch (error) {
                console.log(error.response)
            }
        }
        fetchNotice()
    }, [])



    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/project', { withCredentials: true })
                setProjects(response.data.payload)
            } catch (error) {
                console.log(error.response)
            }
        }
        fetchProject()
    }, [])



    useEffect(() => {
        const fetchUpdate = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/update', { withCredentials: true })
                setUpdate(response.data.payload)
            } catch (error) {
                console.log(error.response)
            }
        }
        fetchUpdate()
    }, [])



    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/gallery', { withCredentials: true })
                setGallery(response.data.payload)
            } catch (error) {
                console.log(error.response)
            }
        }
        fetchGallery()
    }, [])
    
    
    
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user/users', { withCredentials: true })
                setUsers(response.data.payload)
            } catch (error) {
                console.log(error.response)
            }
        }
        fetchUsers()
    }, [])


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user/publications', { withCredentials: true })
                setLPublications(response.data.payload)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
    }, [])

    
    const contextValue = {
        sidebar, setSidebar,
        update, setUpdate,
        events, setEvents,
        gallery, setGallery,
        messages, setMessages,
        notices, setNotices,
        publications, setLPublications,
        projects, setProjects,
        admin, setAdmin,
        user, setUser,
        author, setAuthor,
        team, setTeam,
        users, setUsers

    }
    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export default ContextProvider