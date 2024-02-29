import React from 'react'
import { data } from '../BD/ProductBd'
import ProductCard from "../components/ProductCards"


const product = () => {
    return (
      <div>
        <h1>Product Page</h1>
        <div className="d-flex justify-content-between flex-wrap gap-3">
          {data.map((p) => {
            return (
              <div className="" key={p.id}>
                <ProductCard product={p} />
              </div>
            );
          })}
        </div>
      </div>
    


  )
}

export default product
