import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import default_image from '../Assests/default_image.svg'


const ImageGenerator = () => {

  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0
    }
    const imageGenerator = async () => {
      if (inputRef.current.value === "") {
        return;
      }

      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}` // Securely store API Key

          },
          body: JSON.stringify({
            prompt: inputRef.current.value,
            n: 1,
            size: "512x512"
          }),
        }
      );

      let data = await response.json();
      console.log(data);
    };
  }

  return (
    <div className="ai-image-generator">
      <div className="header">Ai image <span>generator</span></div>
      <div className="img-loading">
        <div className="image"><img src={image_url === "/" ? default_image : image_url} alt="" /></div>

      </div>

      <div className="search-box">
        <input type="text" ref={inputRef} className='search-input' placeholder='Describe What You Want To See' />
        <div className="generate-btn" onClick={() => { imageGenerator() }}>Generate</div>

      </div>
    </div>


  )
}

export default ImageGenerator
