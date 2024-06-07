import { makeAutoObservable } from 'mobx';
import ProductService from '../services/productService';

export default class ProductStore {
  products = [];
  selectedProduct = null;
  productId = null;
  constructor() {
    makeAutoObservable(this);
  }

  setProducts(products) {
    this.products = products;
  }

  setSelectedProduct(product) {
    this.selectedProduct = product;
    localStorage.setItem('selectedProduct', JSON.stringify(product));
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

  async fetchProductById(id) {
    try {
      const response = await ProductService.getProductById(id);
      this.setSelectedProduct(response.data);
      this.productId = response.data.id;
      localStorage.setItem('productId', this.productId);
      console.log(
        'currentProduct :: ' + this.selectedProduct.productName + ' ' + this.selectedProduct.price,
      );
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  }
}
