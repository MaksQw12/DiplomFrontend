import $api from '../api/api';

export default class AuthService {
  static async postGetCode(authData) {
    return await $api.post('/LogIn/GetCode', authData);
  }

  static async postSendCode(authData) {
    return await $api.post('/LogIn/Auth', authData);
  }
}
