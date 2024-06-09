import Carousel from 'react-bootstrap/Carousel';
import '../styles/MainPageView.css';
const MainPageView = () => {
  return (
    <div className="content-main-carousel">
      <Carousel data-bs-theme="dark" className="content-carousel">
        <Carousel.Item>
          <img
            width="600px"
            height="600px"
            className="d-block w-100"
            alt="First slide"
            src="https://img.freepik.com/premium-photo/pile-blankets-white-space_176873-995.jpg"
          />
          <Carousel.Caption>
            <div className="content-fortext">
              <h2 className="text-h2">ТОЛЬКО У НАС</h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="600px"
            height="600px"
            className="d-block w-100"
            alt="Second slide"
            src="https://img.freepik.com/free-photo/arrangement-with-warm-clothes-brick-wall_23-2148312010.jpg"
          />
          <Carousel.Caption>
            <div className="content-fortext">
              <h2 className="text-h2">КАЖДУЮ ПЯТНИЦУ</h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="600px"
            height="600px"
            className="d-block w-100"
            alt="Third slide"
            src="https://img.freepik.com/premium-photo/pastel-warm-knitted-clothes-sweater-hanging-closet-cozy-autumn-winter-wardrobe_90791-2331.jpg"
          />
          <Carousel.Caption>
            <div className="content-fortext">
              <h2 className="text-h2">СКИДКИ ДО 35%</h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainPageView;
