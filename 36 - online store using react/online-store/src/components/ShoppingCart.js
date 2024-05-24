import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/actions';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default ShoppingCart;
