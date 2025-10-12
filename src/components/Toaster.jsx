import React, { useEffect } from 'react'

const Toaster = ({ message, onClose }) => {


  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className='fixed top-16 w-full h-8 bg-emerald-900 text-white'>
      {message}
    </div>
  )
}

export default Toaster
