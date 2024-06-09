import { makeAutoObservable } from 'mobx';
import CommentsService from '../services/commentsService';

export default class CommentsStore {
  comments = [];
  constructor() {
    makeAutoObservable(this);
  }

  async postComments(commentsData) {
    try {
      const response = await CommentsService.postComments(commentsData);
      if (response.status === 201) {
        alert('Ваш комментарий добавлен');
        await this.getComments(commentsData.isProduct);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getComments(productId) {
    try {
      const response = await CommentsService.getComments(productId);
      this.comments = response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
