import $api from '../api/api';

export default class CommentsService {
  static async postComments(commentsData) {
    return await $api.post('/Comments', commentsData);
  }

  static async getComments(productId) {
    return await $api.get(`/Comments?productId=${productId}`);
  }
}
