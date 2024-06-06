import $api from '../api/api';

export default class ProductService {
  static async getProduct() {
    return await $api.get(`/Products`);
  }

  static async getProduct(search) {
    return await $api.get(`/Products?search=${search}`);
  }
}

// ?search=${search}
