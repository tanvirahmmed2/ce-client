import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const Sidebar = () => {
  const { sidebar } = useContext(ThemeContext)
  console.log(sidebar)
  return (
    <div>

    </div>
  )
}

export default Sidebar
