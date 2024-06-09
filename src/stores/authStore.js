import { makeAutoObservable } from 'mobx';
import AuthService from '../services/authService';
export default class AuthStore {
  userId = localStorage.getItem('userId') || null;
  userEmail = localStorage.getItem('userEmail') || null;
  Isrequest = false;
  IsAuth = false;
  constructor() {
    makeAutoObservable(this);
  }

  async postGetCode(authData) {
    try {
      const response = await AuthService.postGetCode(authData);
      this.userId = response.data.id;
      this.userEmail = response.data.email;
      if (response.status === 200) {
        this.Isrequest = true;
        localStorage.setItem('userId', this.userId);
        localStorage.setItem('userEmail', this.userEmail);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async postSendCode(authData) {
    try {
      const response = await AuthService.postSendCode(authData);
      if (response.status === 200) {
        this.IsAuth = true;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
