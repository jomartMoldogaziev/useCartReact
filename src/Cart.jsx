import React from 'react';
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
import './Cart.css'
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    
    const navigate = useNavigate();
    const handleBuyClick = () => {
        alert('Чоң рахмат!');
    };

    return (
        <section style={cartContainerStyle}>
            <div style={buttonContainerStyle}>
                <button 
                    className="btn btn-secondary" 
                    onClick={() => navigate(-1)} 
                >
                    Артка
                </button>
                <button 
                    className="btn btn-danger ml-2" 
                    onClick={() => emptyCart()} 
                >
                    Себетти тазалоо
                </button>
            </div>
            
            {isEmpty ? (
                <h1>Себетте эч нерсе жок</h1>
            ) : (
                <>
                    <h6>Товарлардын түрү: {totalUniqueItems}, Баардык товар: {totalItems}</h6>
                    <table className="table table-light table-hover m-0">
                        <thead>
                            <tr>
                                <th>Сүрөтү</th>
                                <th>Товардын аты</th>
                                <th>Баасы</th>
                                <th>Саны</th>
                                <th>Суммасы</th>
                                <th>Аракеттер</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, id) => {
                                    const itemTotal = item.price * item.quantity; 
                                    return (
                                        <tr key={id}>
                                            <td>
                                                <img src={item.img} style={{ height: "6rem" }} alt='img' />
                                            </td>
                                            <td>{item.title}</td>
                                            <td>${item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td>${itemTotal.toFixed(2)}</td>  
                                            <td>
                                                <button 
                                                    className="btn btn-success" 
                                                    style={{ margin: "0 10px" }} 
                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                                <button 
                                                    className="btn btn-warning" 
                                                    style={{ margin: "0 10px" }} 
                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                >
                                                    -
                                                </button>
                                                <button 
                                                    className="btn btn-danger" 
                                                    style={{ margin: "0 10px" }} 
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                   Тазалоо
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className='py-4 container' style={totalContainerStyle}>
                        <h2 style={{ margin: '0' }}>Сумма: ${cartTotal.toFixed(2)}</h2>
                        <button 
                            className="btn btn-primary ml-2" 
                            onClick={handleBuyClick} 
                        >
                            Сатып алуу
                        </button>
                    </div>
                </>
            )}
        </section>
    );
};

const buttonContainerStyle = {
    position: 'fixed',
    top: '20px',
    right: '100px',  
    display: 'flex',
    gap: '10px', 
    zIndex: 1000  
}
const cartContainerStyle = {
    backgroundColor: '#f8f9fa',  
    padding: '20px',
    borderRadius: '8px',
    marginTop: '80px'  
};

const totalContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'  
};

export default Cart;
