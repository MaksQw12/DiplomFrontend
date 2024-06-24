import '../styles/BasketPageCart.css';

const BasketPageCart = ({
  id,
  productName,
  count,
  price,
  image,
  onDelete,
  onIncrease,
  onDecrease,
}) => {
  const imageUrl = `data:image/jpeg;base64,${image}`;
  return (
    <>
      <div className="basket-page-cart">
        <img className="basket-cart-image" src={imageUrl} />
        <div className="basket-cart-details">
          <h2 className="basket-cart-title">{productName}</h2>
          <p className="basket-cart-price">Цена: {price} ₽</p>
          <p className="basket-cart-count">Количество: {count} </p>
          <div className="button-container">
            <button className="quantity-button" onClick={onDecrease}>
              -
            </button>
            <button className="quantity-button" onClick={onIncrease}>
              +
            </button>
          </div>
          <button className="basket-cart-delete-button" onClick={onDelete}>
            Удалить
          </button>
        </div>
      </div>
    </>
  );
};

export default BasketPageCart;
