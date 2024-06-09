import '../styles/BasketPage.css';
import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import BasketPageCart from './BasketPageCart';
import emailjs from 'emailjs-com';
const BasketPage = () => {
  const { basketStore } = useContext(Context);
  const userId = localStorage.getItem('userId');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBasket = async () => {
      await basketStore.getBasketForPage(userId);
      setLoading(false);
    };

    fetchBasket();
  }, [basketStore, userId]);

  const handleDelete = async (basketItemId) => {
    await basketStore.deleteBasket(basketItemId);
    await basketStore.getBasketForPage(userId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  const email = localStorage.getItem('userEmail');
  const handleOrder = async () => {
    const templateParams = {
      to: `${email}`,
      subject: 'Ваш заказ',
      message: `Вы оформили заказ на сумму ${basketStore.totalCost} ₽. Спасибо за покупку! Мы можем отправить его вам по почте или вы подъедите к нам по адресу: Курская область, Обоянский район, город Обоянь `,
    };

    emailjs.send('service_g7andhc', 'template_c6tfj1i', templateParams, 'cLLuXpJhz5SI85CSs').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Письмо отправлено: ' + response.text);
      },
      (error) => {
        console.error('Ошибка при отправке письма:', error);
        alert('Ошибка при отправке письма');
      },
    );

    await basketStore.deleteAll(userId);
    await basketStore.getBasketForPage(userId);
  };

  return (
    <div className="container-basket">
      <div className="content-cart-basket">
        {basketStore.basketUser.map((item) => (
          <BasketPageCart
            key={item.id}
            id={item.id}
            productName={item.product.productName}
            count={item.count}
            price={item.product.price}
            image={item.product.image}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>

      <div className="content-button">
        <h5>Общая стоимость: {basketStore.totalCost} ₽</h5>
        <button className="content-element-button" onClick={handleOrder}>
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default observer(BasketPage);
