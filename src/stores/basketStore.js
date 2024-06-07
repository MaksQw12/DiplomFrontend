import { makeAutoObservable } from 'mobx';
import BasketService from '../services/basketService';

export default class BasketStore {
  basket = null;
  constructor() {
    makeAutoObservable(this);
  }

  async postBasket(basketData) {
    try {
      const response = await BasketService.postBasket(basketData);
      this.basket = response.data;
      if (response.status === 201) {
        console.log('добавлен');
      } else {
        console.log('не добавлен');
      }
      return this.basket;
    } catch (e) {
      console.log(e);
    }
  }

  async getBasketItem(userId, productId) {
    try {
      const response = await BasketService.getBasketItem(userId, productId);
      return response.data;
    } catch (error) {
      console.error('Error fetching basket item:', error);
      return null;
    }
  }

  async updateBasketItem(basketItemId, basketData) {
    try {
      await BasketService.updateBasketItem(basketItemId, basketData);
      console.log('Количество товара обновлено');
    } catch (error) {
      console.error('Error updating basket item:', error);
    }
  }
}
