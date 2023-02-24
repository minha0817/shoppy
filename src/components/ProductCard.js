import React from "react";  

export default function ProductCard ({product: {id, image, price, title, category}}) {
  return (
    <li className="">
      <img src={image} alt={title}/>
      <div>
        <h3>{title}</h3>
        <p>{`$${price}`}</p>
      </div>
      <p>{category}</p>
    </li>
  )
}