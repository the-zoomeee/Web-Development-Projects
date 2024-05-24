import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions';

const Checkout = () => {
  const cart = useSelector(state => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    alert('Checkout Successful!');
    dispatch(clearCart()); // Dispatch action to clear cart
  };

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
