import React, { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import UserStore from './stores/userStore.js';
import AuthStore from './stores/authStore.js';
import ProductStore from './stores/productStore.js';
const userStore = new UserStore();
const authStore = new AuthStore();
const productStore = new ProductStore();
export const Context = createContext({ userStore, authStore, productStore });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={{ userStore, authStore, productStore }}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>,
);
