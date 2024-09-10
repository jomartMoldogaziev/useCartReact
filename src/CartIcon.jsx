import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import { useCart } from 'react-use-cart';  

const CartIcon = () => {
    const { totalItems } = useCart(); 
    return (
        <div style={cartIconStyle}>
            <Link to="/cart">  
                <FontAwesomeIcon 
                    icon={faShoppingCart} 
                    size="2x" 
                    style={{ cursor: 'pointer', color: 'black' }}
                />
               
                <span style={badgeStyle}>{totalItems}</span>
            </Link>
        </div>
    );
};

const cartIconStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: '1000',
    cursor: 'pointer',
};

const badgeStyle = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    background: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '5px 10px',
    fontSize: '12px',
};

export default CartIcon;
