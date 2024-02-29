import Menu from "../components/nav"
import "../css/About.css"
import Hero from "../components/Hero"
import img3 from "../assets/images/us.jpg"

function About() {
    // const [count, setCount] = useState(0)
  
    const myJsx = <h3>This is awesome jsx</h3>
    const myFavFood = <ul>
      <li>beans</li>
      <li>amala</li>
      <li>jollof rice</li>
      <li>spaghetti</li>
    </ul>
    const food = ["beans", "amala", "jollof", "spaghetti","tuwo"]

    const myStyle ={listStyle:"none", color:"blue", backgroundColor: "#eeee", marginTop:"4rem"}
  
    return (
      <>
      {/* <Menu/> */}
      <Hero heading= "Welcome to About page" image = {img3}/>
        <div>
        <h1>Qiwi`s React App 1.0</h1>
        {myJsx}
        {myFavFood}
        
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta exercitationem rerum corrupti autem, veritatis laborum quibusdam eligendi perspiciatis quaerat aut facere explicabo asperiores. Sapiente hic sequi necessitatibus. Temporibus, porro!</p>
  
  {/* map through the array */}
  {food.map((s, index)=>{
    return(
    <div className="" key={index} style={myStyle}>
      <p>My favourite food is {s}</p>
    </div>
    )
  })}
      </>
  
    )
  }
  export default About

  