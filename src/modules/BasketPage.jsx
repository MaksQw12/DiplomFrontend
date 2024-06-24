import '../styles/BasketPage.css';
import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import BasketPageCart from './BasketPageCart';
import emailjs from 'emailjs-com';
const BasketPage = () => {
  const { basketStore } = useContext(Context);
  const userId = localStorage.getItem('userId');
  const productId = localStorage.getItem('productId');
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
    if (basketStore.basketUser.length === 0) {
      alert('Ваша корзина пуста');
      return;
    }
    const productNames = basketStore.basketUser.map((item) => item.product.productName).join(', ');
    const templateParams = {
      to: email,
      subject: 'Ваш заказ',
      message: `Вы оформили заказ на сумму ${basketStore.totalCost} ₽. Спасибо за покупку! Вы заказали следующие товары: ${productNames}. Мы можем отправить их вам по почте или вы можете забрать их по адресу: Курская область, Обоянский район, город Обоянь.`,
    };

    try {
      const response = await emailjs.send(
        'service_g7andhc',
        'template_c6tfj1i',
        templateParams,
        'cLLuXpJhz5SI85CSs',
      );
      if (response.status === 200) {
        console.log('Письмо отправлено: Посмотрите почту');
        alert('Письмо отправлено: Посмотрите почту');

        await basketStore.deleteAll(userId);
        await basketStore.getBasketForPage(userId);
      } else {
        throw new Error('Не удалось отправить письмо');
      }
    } catch (error) {
      console.error('Ошибка при отправке письма:', error);
      alert('Ошибка при отправке письма');
    }
  };
  const idUser = localStorage.getItem('userId');
  const idProduct = localStorage.getItem('productId');
  const handleDecrease = async (basketItemId) => {
    const basketItem = await basketStore.getBasketItem(userId, productId);
    const item = basketStore.basketUser.find((item) => item.id === basketItemId);
    if (item && item.count > 1) {
      await basketStore.updateBasketItem(basketItem.id, {
        id: basketItem.id,
        idUser,
        idProduct,
        count: basketItem.count - 1,
      });
      await basketStore.getBasketForPage(userId);
    }
  };

  const handleIncreaseCount = async (basketItemId) => {
    const basketItem = await basketStore.getBasketItem(userId, productId);
    const item = basketStore.basketUser.find((item) => item.id === basketItemId);
    if (item) {
      await basketStore.updateBasketItem(basketItem.id, {
        id: basketItem.id,
        idUser,
        idProduct,
        count: basketItem.count + 1,
      });
      await basketStore.getBasketForPage(userId);
    }
  };

  return (
    <div className="container-basket">
      {basketStore.basketUser.length === 0 ? (
        <div className="empty-basket-message">
          <h3>Корзина пуста</h3>
          <div className="sad-face">😢</div>
        </div>
      ) : (
        <>
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
                onIncrease={() => handleIncreaseCount(item.id)}
                onDecrease={() => handleDecrease(item.id)}
              />
            ))}
          </div>

          <div className="content-button">
            <h5>Общая стоимость: {basketStore.totalCost} ₽</h5>
            <button className="content-element-button" onClick={handleOrder}>
              Оформить заказ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default observer(BasketPage);
