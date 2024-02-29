import React from 'react'
import { NavLink } from 'react-router-dom'

const Detailcard = ({product}) => {
  return (
    <div className='row' style={{height:"20rem", textAlign: "left", width:"30rem"}}>
        <div className="col-12 col-md-6" style={{height:"15rem"}}>
            <img src={product?.image} alt="" width="200px" height="200px" />
        </div>
        <div className="col-12 col-md-6">
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.desc}</p>
            <button>
                <NavLink to="/product" style={{textDecoration: "none", color:"green"}}>
                Go Back
                </NavLink>
            </button>
        </div>
    
    </div>
    
  )
}

export default Detailcard
