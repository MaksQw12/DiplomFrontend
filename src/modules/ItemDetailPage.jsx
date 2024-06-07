import '../styles/ItemDetailPage.css';
import { Context } from '../main';
import { useContext, useEffect, useState } from 'react';

const ItemDetailPage = () => {
  const { productStore, basketStore } = useContext(Context);
  const [product, setProduct] = useState(productStore.selectedProduct);
  const idUser = localStorage.getItem('userId');
  const idProduct = localStorage.getItem('productId');
  const count = 1;
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
      } else {
        await basketStore.postBasket({ idUser, idProduct, count });
        console.log('Товар добавлен в корзину');
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
      <div className="content-comments"></div>
    </div>
  );
};

export default ItemDetailPage;
