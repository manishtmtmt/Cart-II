import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Product from "./Product"
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/products")
    .then((r)=>r.json())
    .then((d)=>{
      setProducts(d)
    })
  },[])
  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
      {products.map((data)=>(
        <div key={data.id}>
          <Link to={`/products/${data.id}`}>{<img src={data.img}/>}</Link>
        </div>
      ))}
    </div>
  )
}

export default Products