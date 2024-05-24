import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
