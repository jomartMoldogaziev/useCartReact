import React from 'react';
import { useCart } from "react-use-cart";

export const ItemCart = (props) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(props.item);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(props.item);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <div className="card" style={{ width: '18rem' }}> 
        <img 
          src={props.img} 
          className="card-img-top" 
          alt={props.title} 
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h5 className='card-text'>{props.desc}</h5>
          <h3>{props.price}$</h3>
          <button 
            className="btn btn-success"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
