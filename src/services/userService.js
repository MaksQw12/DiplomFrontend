import $api from '../api/api';

export default class UserService {
  static async postUser(userData) {
    return await $api.post('/Users', userData);
  }
}
