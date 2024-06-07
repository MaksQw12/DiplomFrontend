import React from 'react';
import '../styles/BasketPage.css';

const BasketPage = () => {
  // Предположим, что у вас есть массив товаров в корзине
  const products = [
    {
      id: 1,
      title: 'Название товара',
      price: 100,
      image: 'https://example.com/image.jpg',
    },
    // Добавьте другие товары в корзине при необходимости
  ];

  // Функция для удаления товара из корзины
  const handleRemoveProduct = (productId) => {
    // Реализуйте логику удаления товара
    console.log(`Товар с ID ${productId} удален из корзины`);
  };

  // Функция для покупки товаров в корзине
  const handleBuyProducts = () => {
    // Реализуйте логику покупки товаров
    console.log('Товары в корзине куплены');
  };

  return (
    <div class="basket-container">
      <div class="basket-item">
        <img src="item1.jpg" alt="Item Image" class="basket-item-image" />
        <div class="basket-item-details">
          <div class="basket-item-title">Название товара</div>
          <div class="basket-item-price">Цена: $10.00</div>
          <button class="delete-button">Удалить</button>
        </div>
      </div>
      <div class="basket-item">
        <img src="item2.jpg" alt="Item Image" class="basket-item-image" />
        <div class="basket-item-details">
          <div class="basket-item-title">Название товара</div>
          <div class="basket-item-price">Цена: $20.00</div>
          <button class="delete-button">Удалить</button>
        </div>
      </div>
      <button class="buy-button">Купить</button>
    </div>
  );
};

export default BasketPage;
