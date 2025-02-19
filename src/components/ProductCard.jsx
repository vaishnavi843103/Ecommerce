import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
        
    </div>
  );
};

export default ProductCard