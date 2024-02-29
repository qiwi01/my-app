import React, {useState} from 'react'
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { IoEyeOffSharp } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";


const Register = () => {

    // hooks
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate()
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
const url = "https://blogg-api-v1.onrender.com/register";

// validate
if (!username||!password||!email){
    console.log("Enter all fields");
    return toast.error("one million scratch card up for grab when you register");
    }
      // Email validation 
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
          return toast.error("Please enter a valid email address");
      }
      // Username validation
      const usernameTrim = username.trim();
      if (!username || usernameTrim.length < 3) {
          return toast.error("Username is required");
              }
      // Password validation
      const passwordTrim = password.trim();
          if (!password || passwordTrim.length < 6) {
              return toast.error("Password is required");
          }
    
try {
    setLoading(true);
    const {data} = await axios.post(url, {
        username,
        email, 
        password,
    })

    if(!data?.error){
        toast.success("Registration successful!");
        // redirect user to login
        setTimeout(()=> {
            navigate("/login");
        }, 5000)
        
    }else{
        toast.error("Registration failed!");
    }




} catch (error) {
    console.log(error);
    
}
    }
    console.log(username);
    console.log(password);
    console.log(email);

  return (
    <div>
        <ToastContainer/>
        <h2>REGISTRATION PAGE</h2>
        <form onSubmit={handleSubmit}>
        <div className="">
            <input className='p-3 form-control' type="text" placeholder= "username" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
        </div>
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
          disabled={loading}
          >
            {loading ? (
            <>
            <span
              class="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
            <span role="status">Loading...</span>
            </>
          ) : (
            "Submit"
          )}
        </button>
        </form>
        
    </div>
  )
}

export default Register