import { makeAutoObservable } from 'mobx';
import UserService from '../services/userService';

export default class UserStore {
  user = null;
  isReg = false;
  constructor() {
    makeAutoObservable(this);
  }

  async postUser(userData) {
    try {
      const response = await UserService.postUser(userData);
      if (response.status === 201) {
        this.isReg = true;
        this.user = response.data;
        console.log(this.user);
      }
      return this.user;
    } catch (e) {
      console.log(e);
    }
  }
}
