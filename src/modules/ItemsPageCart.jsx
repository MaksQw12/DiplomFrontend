import '../styles/ItemsPageCart.css';
import { useNavigate } from 'react-router-dom';
import { Context } from '../main';
import React, { useEffect, useContext } from 'react';
const ItemsPageCart = ({ id, title, price, image }) => {
  const { productStore } = useContext(Context);
  const imageUrl = `data:image/jpeg;base64,${image}`;
  const navigate = useNavigate();
  const handleMoreDetails = async () => {
    await productStore.fetchProductById(id);
    navigate(`/MainPage/ItemDetailPage`);
  };
  return (
    <>
      <div className="content-body-item-cart">
        <div className="content-item-cart-image">
          <img src={imageUrl} alt="Картинка" className="cart-image-content" />
        </div>

        <div className="content-item-cart-text">
          <h5 className="cart-text-element">{title}</h5>
          <h5 className="cart-text-element">от {price} ₽</h5>
        </div>

        <div className="content-item-cart-button">
          <button className="cart-button-element" onClick={handleMoreDetails}>
            Подробнее
          </button>
        </div>
      </div>
    </>
  );
};
export default ItemsPageCart;
