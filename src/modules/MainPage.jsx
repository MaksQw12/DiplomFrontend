import React, { useState } from 'react';
import '../styles/MainPage.css';
import { Link, Routes, Route } from 'react-router-dom';
import ItemsPage from './ItemsPage';
import AboutUs from './AboutUs';
import tg_logo from '../assets/Tg_logo.svg';
import vk_logo from '../assets/Vk_logo.svg';
import { useNavigate } from 'react-router-dom';
import ItemDetailPage from './ItemDetailPage';
import BasketPage from './BasketPage';
import MainPageView from './MainPageView';
import { useContext } from 'react';
import { Context } from '../main';
const MainPage = () => {
  const { authStore } = useContext(Context);
  const navigate = useNavigate();
  const [isProfilePanelVisible, setIsProfilePanelVisible] = useState(false);
  const email = localStorage.getItem('userEmail');
  const toggleProfilePanel = () => {
    setIsProfilePanelVisible((prevState) => !prevState);
  };

  const handleLogOut = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    authStore.IsAuth = false;
    authStore.Isrequest = false;
    navigate('/');
  };
  return (
    <div className="wrapper-content-main">
      <div className="content-header">
        <div className="header-text-h2">
          <Link className="element-h2" to="/MainPage">
            Текстиль
          </Link>
        </div>
        <div className="header-text-a">
          <Link to="ItemsPage" className="text-a">
            Товары
          </Link>
          <Link to="BasketPage" className="text-a">
            Корзина
          </Link>
          <Link to="AboutUs" className="text-a">
            О нас
          </Link>
        </div>
        <div className="header-text-h5">
          <h5 className="text-h5" onClick={toggleProfilePanel}>
            {email}
          </h5>
          {isProfilePanelVisible && (
            <div className="profile-panel">
              <button className="profile-button" onClick={handleLogOut}>
                Выход
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="content-body">
        <Routes>
          <Route path="/" element={<MainPageView />} />
          <Route path="ItemsPage" element={<ItemsPage />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="ItemDetailPage" element={<ItemDetailPage />} />
          <Route path="BasketPage" element={<BasketPage />} />
        </Routes>
      </div>
      <div className="content-footer">
        <div className="footer-text">Связь с нами: </div>
        <div className="content-footer-logo">
          <a href="https://telegram.org" target="_blank">
            <img src={tg_logo} alt="tg_image" className="content-footer-image"></img>
          </a>

          <a href="https://vk.com" target="_blank">
            <img src={vk_logo} alt="vk_image" className="content-footer-image"></img>
          </a>
        </div>
        <div className="footer-text">Почта: WorkToCode@yandex.ru </div>
      </div>
    </div>
  );
};

export default MainPage;
