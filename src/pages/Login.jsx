import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { IoEyeOffSharp } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { Spinner } from 'react-bootstrap';


const Login = () => {
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate()
    // const [error, setError] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
const url = "https://blogg-api-v1.onrender.com/login"


// validate
if (!password||!email){
    console.log("Enter all fields");
    return toast.error("login failed");
    }
      // Email validation 
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
          return toast.error("Please enter a valid email address");
      }
      // Password validation
      const pwdTrim = password.trim();
          if (!password || pwdTrim.length < 6) {
              return toast.error("Password is required");
          }
    
try {
    setLoading(true);
    const {data} = await axios.post(url, {email, password})

    if(!data?.error){
        toast.success("Login successful!");
        // redirect user to login
        setTimeout(()=> {
            navigate("/")
        }, 5000);
        setLoading(false);
        console.log(data);
        
    }else{
        toast.error("Login failed!");
    }

} catch (err) {
    console.log(err);
    const {error} = err?.response?.data
toast.error(error);
}


    }
    console.log(password);
    console.log(email);

console.log(showPassword);


  return (
         
    <div>
        <ToastContainer/>
     
        <h1>LOGIN PAGE</h1>
        <form onSubmit={handleSubmit}>
        <div className="">
            <input className='p-3 my-3 form-control' type="email" placeholder= "Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            
        </div>
        <div className="password-input-wrapper">
            <input className='p-3 form-control' type={showPassword ? "text" : "password"} placeholder= "Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <span onClick={()=>setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEye className='icon'/> : <IoEyeOffSharp className='icon'/>}
                 </span>
                 
        </div>
        <button
          className="btn  btn-primary my-3 p-3 w-100"
          onClick={handleSubmit}
          disabled={loading}> 
          {loading ? (
            <>
            <span
              class="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
            <span role="status">Loading...</span>
            </>
          ) : (
            "Login"
          )}
        </button>
        </form>
    </div>
  )
}

export default Login