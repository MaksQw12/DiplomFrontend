import { makeAutoObservable } from 'mobx';
import BasketService from '../services/basketService';

export default class BasketStore {
  basket = null;
  basketUser = [];
  constructor() {
    makeAutoObservable(this);
  }

  async deleteAll(userId) {
    try {
      const response = await BasketService.deleteAll(userId);
      this.basketUser = [];
      if (response.status === 204) {
        console.log('все продукты удалены');
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getBasketForPage(userId) {
    try {
      const response = await BasketService.getBasketForPage(userId);
      this.basketUser = response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteBasket(id) {
    try {
      const respone = await BasketService.deleteBasket(id);
      if (respone.status === 204) {
        alert('Продукт удален из корзины');
      }
    } catch (e) {
      console.log(e);
    }
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

  get totalCost() {
    return this.basketUser.reduce((total, item) => total + item.product.price * item.count, 0);
  }
}
