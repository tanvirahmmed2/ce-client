import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import {  ThemeContext } from './Context'
import { toast } from 'react-toastify'

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(ThemeContext) 
    const [checking, setChecking] = useState(true)

    useEffect(() => {
       
        const timer = setTimeout(() => {
            setChecking(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    if (checking) {
        return <div className="text-center p-4">Checking login...</div> 
    }

    if (!user) {
        toast.error('Please login')
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute
