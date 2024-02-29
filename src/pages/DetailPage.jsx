import React from 'react'
import ProductCard from '../components/ProductCards'
import { data } from '../BD/ProductBd'
import { useParams } from 'react-router-dom'
import Detailcard  from '../components/detailcard'

const DetailPage = () => {
    const {id} = useParams()
    console.log(`item ${id} clicked`);
    // console.log(data);

    // Go into the database and find the product with the id === productId
    const Qiwi = data.find((p) => p.id === parseInt(id));
    console.log(id);
  return (
    <div>
        <h1>Detail Page</h1>
        <div className="">
            <h3>product {id} clicked</h3>
            {/* <ProductCard product = {Qiwi}/> */}
            <Detailcard product = {Qiwi}/>
        </div>
    </div>
  )
}

export default DetailPage