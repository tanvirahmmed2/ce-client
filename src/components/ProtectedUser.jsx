import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { ThemeContext } from './Context'
import { toast } from 'react-toastify'

const ProtectedUser = ({ children }) => {
  const { user } = useContext(ThemeContext)
  const [checking, setChecking] = useState(true)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setChecking(false), 500)
    return () => clearTimeout(timer)
  }, [])


  useEffect(() => {
    if (!checking && user) {
      toast.error('Already Logged in')
      setRedirect(true)
    }
  }, [checking, user])

  if (checking) {
    return <div className="text-center p-4">Checking login...</div>
  }

  if (redirect) {
    return <Navigate to="/profile" replace />
  }

  return children
}

export default ProtectedUser
