import React from 'react';
import ProductItem from './ProductItem';
import products from '../data/products'; // Assume this file contains a list of products

const ProductList = () => {
  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
