import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {
    const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

    const [rating, setRating] = useState(0); // State for manual rating

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={url + "/images/" + image} alt="" />
                {!cartItems[id] ? (
                    <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                ) : (
                    <div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <div className="food-item-stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => setRating(star)}
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '18px',
                                    color: star <= rating ? 'gold' : 'gray',
                                    marginRight: '3px'
                                }}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">{currency}{price}</p>
                <a href="https://g.co/kgs/EeYgdUs" target="_blank" rel="noopener noreferrer">
                    <button 
                        style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "8px 15px",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "5px",
                            borderRadius: "5px",
                            marginTop: "10px",
                            transition: "background 0.3s",
                        }} 
                        onMouseOver={(e) => e.target.style.backgroundColor = "#e60000"} 
                        onMouseOut={(e) => e.target.style.backgroundColor = "black"}
                    >
                        Add Review
                    </button>
                </a>
            </div>
        </div>
    );
};

export default FoodItem;
