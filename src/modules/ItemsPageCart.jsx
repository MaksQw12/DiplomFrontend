import '../styles/ItemsPageCart.css';

const ItemsPageCart = ({ id, title, price, image }) => {
  const imageUrl = `data:image/jpeg;base64,${image}`;
  return (
    <>
      <div className="content-body-item-cart">
        <div className="content-item-cart-image">
          <img src={imageUrl} alt="Картинка" className="cart-image-content" />
        </div>

        <div className="content-item-cart-text">
          <h5 className="cart-text-element">{title}</h5>
          <h5 className="cart-text-element">от {price} ₽</h5>
        </div>

        <div className="content-item-cart-button">
          <button className="cart-button-element">Подробнее</button>
        </div>
      </div>
    </>
  );
};
export default ItemsPageCart;
