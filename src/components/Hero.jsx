import React from 'react'
// import hero from "../assets/images/580ddcaf-0f76-492e-9cbb-33e0ed538513.jpg"

const Hero = (props) => {
    // destructuring props
    const { heading, image } = props

  return (
    <div style={{backgroundColor: "purple", color:"white",}}>
        <div className="">
            <img src= {image} alt="" width={300} height={300}/>
        </div>
        {/* <h1>Welcome to my page</h1> */}
        <h1>{heading}</h1>
    </div>
  )
}


export default Hero
