import { makeAutoObservable } from 'mobx';
import UserService from '../services/userService';

export default class UserStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  async postUser(userData) {
    try {
      const response = await UserService.postUser(userData);
      this.user = response.data;
      console.log(this.user);
      return this.user;
    } catch (e) {
      console.log(e);
    }
  }
}
