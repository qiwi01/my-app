import img1 from "../assets/images/me.jpg"
import Menu from "../components/nav"
import Spins from "../components/loader"
import "../css/Home.css"
import Hero from "../components/Hero"


function Home () {
    return (
    <>
    {/* <Menu/> */}
    <Spins/>
    <Hero heading= "Welcome to Home page" image={img1} />

    {/* <ProductCard/> */}
    {/* <h1 className="bg-danger text-light">Welcome to Home page</h1> */}
    {/* <div className="" style={{backgroundColor: "darkgreen", height:"300px", borderRadius:"15px"}}>
        <img src={img1} alt="img1" width={300} height={300} />  
    </div> */}

    </>
    )
}

export default Home 