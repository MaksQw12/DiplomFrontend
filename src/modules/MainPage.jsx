import React, { useState } from 'react';
import '../styles/MainPage.css';
import { Link, Routes, Route } from 'react-router-dom';
import ItemsPage from './ItemsPage';

const MainPage = () => {
  const [isProfilePanelVisible, setIsProfilePanelVisible] = useState(false);

  const toggleProfilePanel = () => {
    setIsProfilePanelVisible((prevState) => !prevState);
  };

  return (
    <div className="wrapper-content-main">
      <div className="content-header">
        <div className="header-text-h2">
          <h2>Текстиль</h2>
        </div>
        <div className="header-text-a">
          <Link to="ItemsPage" className="text-a">
            Товары
          </Link>
          <a href="" className="text-a">
            Корзина
          </a>
        </div>
        <div className="header-text-h5">
          <h5 className="text-h5" onClick={toggleProfilePanel}>
            профиль
          </h5>
          {isProfilePanelVisible && (
            <div className="profile-panel">
              <button className="profile-button">Настройки</button>
              <button className="profile-button">О нас</button>
              <button className="profile-button">Выход</button>
            </div>
          )}
        </div>
      </div>
      <div className="content-body">
        <Routes>
          <Route path="ItemsPage" element={<ItemsPage />} />
        </Routes>
      </div>
      <div className="content-footer">1</div>
    </div>
  );
};

export default MainPage;
