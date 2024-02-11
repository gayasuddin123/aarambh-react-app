import React from "react";

export default function Product(props) {
  return (
    <div className="cardMain">
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      
      <p>{props.description}</p>
      <p>
         
      </p>
      </div>
    </div>
  );
}