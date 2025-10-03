import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const Gallery = () => {
  const { gallery } = useContext(ThemeContext)
  return (
    <div>
      {gallery ? <div></div> : <p>No image found in gallery</p>}
    </div>
  )
}

export default Gallery
