import { createContext, useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
import { api } from "./api";
import { toast } from "react-toastify";



export const ThemeContext = createContext()

const ContextProvider = ({ children }) => {
    const [loader, setLoader]= useState(true)
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
    const [collaborations, setCollaborations] = useState([])


    useEffect(()=>{
        const fetchServer= async()=>{
            try {
                const response= await axios.get(`${api}`, {withCredentials: true})
                if(response.data.success){
                    setLoader(false)
                }else{
                    setLoader(true)
                }
            } catch (error) {
                setLoader(true)
                toast.error(error)
            }
        }
        fetchServer()
    })


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    `${api}/user/protectedroute`,
                    { withCredentials: true }
                );

                const userData = response.data.user;

                if (!userData) {
                    setUser(null);
                    setAdmin(false);
                    setAuthor(false);
                } else {
                    setUser(userData);

                    if (userData.role === 'Admin') {
                        setAdmin(true);
                        setAuthor(false);
                    } else if (userData.role === 'Author') {
                        setAuthor(true);
                        setAdmin(false);
                    } else {
                        setAdmin(false);
                        setAuthor(false);
                    }
                }
            } catch (error) {
                setUser(null);
                setAdmin(false);
                setAuthor(false);
            }
        };

        fetchUser();
    }, []);


    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`${api}/event`, { withCredentials: true })
                setEvents(response.data.payload)
            } catch (error) {

            }
        }
        fetchEvent()
    }, [])

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await axios.get(`${api}/team`, { withCredentials: true })
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
                const response = await axios.get(`${api}/notice`, { withCredentials: true })
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
                const response = await axios.get(`${api}/project`, { withCredentials: true })
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
                const response = await axios.get(`${api}/update`, { withCredentials: true })
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
                const response = await axios.get(`${api}/gallery`, { withCredentials: true })
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
                const response = await axios.get(`${api}/user/users`, { withCredentials: true })
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
                const response = await axios.get(`${api}/user/publications`, { withCredentials: true })
                setLPublications(response.data.payload)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
    }, [])


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${api}/collaboration`, { withCredentials: true })
                setCollaborations(response.data.payload)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
    }, [])


    const contextValue = {
        loader, setLoader,
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
        users, setUsers,
        collaborations, setCollaborations

    }
    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export default ContextProvider