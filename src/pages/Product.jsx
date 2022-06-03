import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = ({data}) => {
  const [product, setProduct] = useState({})
  const { id } = useParams();

  useEffect(()=>{
    if(id) {
      fetch(`http://localhost:8080/products/${id}`)
      .then((r)=>r.json())
      .then((d)=> setProduct(d))
    }
  },[id])
  console.log(product)
  return (
    <div>
      <img src={product.img} />
      <p>{product.category}</p>
      <p>{product.info}</p>
      <button>Add to cart</button>
    </div>
  )
}

export default Product