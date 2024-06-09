import '../styles/CommentsPageCart.css';
const CommentsPageCart = ({ text, estimation }) => {
  return (
    <>
      <div className="content-cart-comments">
        <div className="content-cart-text">
          <p className="text-p">Отзыв: {text}</p>
        </div>
        <div className="content-cart-rating">оценка: {estimation}/5</div>
      </div>
    </>
  );
};

export default CommentsPageCart;
