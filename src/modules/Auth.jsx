import { Link } from 'react-router-dom';
import '../styles/Auth.css';
import { useContext, useState } from 'react';
import { Context } from '../main';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
  const { authStore } = useContext(Context);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleLoginChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      await authStore.postGetCode({ userName, email });
      if (authStore.Isrequest === true) {
        navigate('/AuthCode');
      } else {
        alert('Данные неправильные или пустые поля');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="wrapper-container">
      <div className="container-left">
        <div className="wrapper-content-auth">
          <div className="login-container">
            <h2>Вход</h2>
            <form>
              <div className="input-group">
                <label>Логин:</label>
                <input
                  type="text"
                  id="login"
                  name="login"
                  value={userName}
                  onChange={handleLoginChange}></input>
              </div>
              <div className="input-group">
                <label>Почта:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}></input>
              </div>
              <button type="submit" onClick={handleAuth}>
                Войти
              </button>
            </form>
            <div className="register-link">
              <p>
                Нет аккаунта? <Link to="/SignUp">Зарегистрируйтесь</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-right">
        <h2>Добро пожаловать в мазагин Текстиль</h2>
        <p>Пожалуйста авторизуйтесь или создайте аккаунт</p>
      </div>
    </div>
  );
};

export default Auth;
