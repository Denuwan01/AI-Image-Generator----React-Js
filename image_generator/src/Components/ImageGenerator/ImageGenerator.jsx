import React from 'react'
import './ImageGenerator.css'
import default_image from '../Assests/default_image.svg'


const ImageGenerator = () => {
  return (
    <div className="ai-image-generator">
      <div className="header">Ai image <span>generator</span></div>
      <div className="img-loading">
        <div className="image"><img src={default_image} alt="" /></div>
      </div>

    </div>
  )
}

export default ImageGenerator
