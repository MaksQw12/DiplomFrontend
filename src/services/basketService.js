import $api from '../api/api';

export default class BasketService {
  static async postBasket(basketData) {
    return await $api.post('/Baskets', basketData);
  }

  static async getBasketItem(userId, productId) {
    return await $api.get(`/Baskets?userId=${userId}&productId=${productId}`);
  }

  static async updateBasketItem(basketItemId, basketData) {
    return await $api.put(`/Baskets/${basketItemId}`, basketData);
  }
  static async getBasketForPage(userId) {
    return await $api.get(`/Baskets/user/${userId}`);
  }

  static async deleteBasket(id) {
    return await $api.delete(`/Baskets/${id}`);
  }

  static async deleteAll(userId) {
    return await $api.delete(`/Baskets/user/${userId}`);
  }
}
