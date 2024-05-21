import React, { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import UserStore from './stores/userStore.js';
import AuthStore from './stores/authStore.js';
const userStore = new UserStore();
const authStore = new AuthStore();
export const Context = createContext({ userStore, authStore });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={{ userStore, authStore }}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>,
);
