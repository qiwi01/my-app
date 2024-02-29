import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Spins from '../components/loader';

const FetchData = () => {
  // hooks
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(loading);

  // fetching blogs with axios
  const fetchBlogs = async () => {
    const url = "https://blogg-api-v1.onrender.com/blogs/all"
    try{
      setLoading(true);
        const response = await axios.get(url)
        const data = await response?.data

      // console.log(data);
      if (data){
       setBlogs(data?.blogs)
       setLoading(false);
      }


    } catch(error){
      console.log(error);
  }
}
    useEffect(()=>{
      fetchBlogs();
    },[])
    console.log(blogs);
    // loader
    if (loading){
      return <Spins/>
    }
    return (
      <div>
          <h1>Fetch Data Component</h1>
          <div className="row d-flex gap-3 justify-content-center align-items-content">
              {blogs.map((blog) => {
                  return(
                      <div className="col-12 col-md-4 col-lg-3" style={{height: "400px", backgroundColor: "#eee", padding:"5px"}}>
                          <div className="card-image" style={{width: "100%", backgroundColor:"red"}}>
                              <img src={blog.imageUrl} alt="" width="100%" height="200px" />
                          </div>
                          <div className="text-start">
                              <h3>{blog.title}</h3>
                              <p>{blog.content.slice (0,30)}</p>
                              <p>{blog.author}</p>
                              <p>{blog.read_time}min</p>
                          </div>
                      </div>
                  )
              })}
          </div>
      </div>
  )
}
export default FetchData;