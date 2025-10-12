import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import {  ThemeContext } from './Context'

const ProtectedAdmin = ({ children }) => {
    const { admin } = useContext(ThemeContext) 
    const [checking, setChecking] = useState(true)

    useEffect(() => {
       
        const timer = setTimeout(() => {
            setChecking(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    if (checking) {
        return <div className="text-center p-4">Checking data...</div> 
    }

    if (!admin) {
        alert('Admin use only')
        return <Navigate to="/" replace />
    }

    return children
}

export default ProtectedAdmin
