import Auth from './modules/Auth';
import AuthCode from './modules/AuthCode';
import SignUp from './modules/SignUp';
import MainPage from './modules/MainPage';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AuthCode" element={<AuthCode />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
