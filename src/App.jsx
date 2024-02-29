// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailPage from './pages/DetailPage'
import MyHook from './hooks/myHook'
import Menu from './components/nav'
import PageNotFound from './pages/404page'
import FetchData from './hooks/FetchData'
import Login from './pages/Login'
import Register from './pages/Register'
import Spins from './components/loader'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
    {/* <Home/>
    <About/>
    <Product/> */}
    {/* Routing pages */}
    {/* <MyHook/> */}
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/about"element={<About/>} />
      <Route path="/product"element={<Product/>} />
      <Route path="/detail/:id"element={<DetailPage/>} />
      <Route path="/hook"element={<MyHook/>} />
      <Route path="/*"element={<PageNotFound/>} />
      <Route path="/blog"element={<FetchData/>} />
      <Route path="/login"element={<Login/>} />
      <Route path="/register"element={<Register/>} />
      <Route path="/loader"element={<Spins/>} />


    </Routes>
    </BrowserRouter>

    </>

  )
}

export default App

