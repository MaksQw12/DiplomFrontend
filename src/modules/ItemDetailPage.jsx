import '../styles/ItemDetailPage.css';
import { Context } from '../main';
import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import CommentsPageCart from './CommentsPageCart';
import CommentCartSkeleton from './CommentCartSkeleton';
const ItemDetailPage = () => {
  const { productStore, basketStore, commentsStore } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(productStore.selectedProduct);
  const idUser = localStorage.getItem('userId');
  const idProduct = localStorage.getItem('productId');
  const count = 1;
  const [text, setText] = useState('');
  const [estimation, setEstimation] = useState(0);
  const handleCommentChange = (e) => {
    setText(e.target.value);
  };

  const handleRatingChange = (value) => {
    setEstimation(value);
  };

  const handleComments = async (e) => {
    e.preventDefault();
    try {
      await commentsStore.postComments({
        idUser: localStorage.getItem('userId'),
        isProduct: localStorage.getItem('productId'),
        text,
        estimation,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const savedProductId = localStorage.getItem('productId');
      if (savedProductId) {
        await commentsStore.getComments(savedProductId);
      }
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    fetchData();
  }, [commentsStore]);

  const handleBasket = async (e) => {
    e.preventDefault();
    try {
      const basketItem = await basketStore.getBasketItem(idUser, idProduct);
      if (basketItem) {
        console.log('Updating basket item:', basketItem.id, basketItem.count + 1);
        await basketStore.updateBasketItem(basketItem.id, {
          id: basketItem.id,
          idUser,
          idProduct,
          count: basketItem.count + 1,
        });
        console.log('Количество товара обновлено');
        alert('кол-во товаров увеличено');
      } else {
        await basketStore.postBasket({ idUser, idProduct, count });
        console.log('Товар добавлен в корзину');
        alert('товар добавлен в вашу корзинцу');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!product) {
      const savedProduct = localStorage.getItem('selectedProduct');
      if (savedProduct) {
        setProduct(JSON.parse(savedProduct));
      }
    }
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const imageUrl = `data:image/jpeg;base64,${product.image}`;

  return (
    <div className="content-detailPage">
      <div className="content-elementProduct">
        <div className="content-image">
          <img src={imageUrl} alt="" height="400px" width="400px" />
        </div>
        <div className="content-text">
          <h1>Название: {product.productName}</h1>
          <p className="p-descr">Описание: {product.description}</p>
          <h4>Цена: {product.price} ₽</h4>
          <h4>Кол-во: {product.count}</h4>
          <h4>Артикль: {product.article}</h4>
          <button className="btnAddIn" onClick={handleBasket}>
            Добавить в корзину
          </button>
        </div>
      </div>

      <div className="main-page-view">
        <div className="content-addcomments">
          <h3>Оставьте комментарий</h3>
          <textarea
            value={text}
            onChange={handleCommentChange}
            placeholder="Напишите свой комментарий здесь..."
            className="comment-textarea"
          />
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star}>
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  checked={estimation === star}
                  onChange={() => handleRatingChange(star)}
                  className="rating-input"
                />
                <svg
                  className="star"
                  fill={star <= estimation ? '#ffc107' : '#e4e5e9'}
                  height="25"
                  width="25"
                  viewBox="0 0 24 24">
                  <polygon points="12,17.27 18.18,21 15.64,13.97 21,9.24 13.81,8.63 12,2 10.19,8.63 3,9.24 8.36,13.97 5.82,21" />
                </svg>
              </label>
            ))}
          </div>
          <button className="add-comment-button" onClick={handleComments}>
            Добавить комментарий
          </button>
        </div>
      </div>

      <div className="content-comments">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <CommentCartSkeleton className="content-skeleton" key={index} />
            ))
          : commentsStore.comments.map((res) => (
              <CommentsPageCart key={res.id} text={res.text} estimation={res.estimation} />
            ))}
      </div>
    </div>
  );
};

export default observer(ItemDetailPage);
