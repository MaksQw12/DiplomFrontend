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
}
