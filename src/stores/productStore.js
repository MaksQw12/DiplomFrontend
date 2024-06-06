import { makeAutoObservable } from 'mobx';
import ProductService from '../services/productService';

export default class ProductStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  setProducts(products) {
    this.products = products;
  }

  async fetchProducts(search) {
    if (this.products.length != 0) {
      return;
    }
    try {
      const response = await ProductService.getProduct(search);
      console.log(response.data);
      this.setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
}
