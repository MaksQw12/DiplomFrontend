import '../styles/AuthCode.css';
import { useContext, useState } from 'react';
import { Context } from '../main';
import { useNavigate } from 'react-router-dom';
const AuthCode = () => {
  const { authStore } = useContext(Context);
  const [vereficationCode, setVereficationCode] = useState('');
  const navigate = useNavigate();
  const handlCodeChange = (e) => {
    setVereficationCode(e.target.value);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      let userId = authStore.userId;
      await authStore.postSendCode({ userId, vereficationCode });
      if (authStore.IsAuth === true) {
        console.log('code is true you auth');
        navigate('/MainPage');
      } else {
        alert('Код введен неправильно или пустая строка');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="wrapper-content-auth-code">
      <div className="verification-container">
        <h2>Подтверждение кода</h2>
        <div className="input-group">
          <label htmlFor="verification-code">Код подтверждения:</label>
          <input
            type="text"
            id="verification-code"
            name="verification-code"
            placeholder="Введите код"
            value={vereficationCode}
            onChange={handlCodeChange}
          />
        </div>
        <p className="email-notice">Вам на почту отправился код подтверждения</p>
        <button type="submit" onClick={handleAuth}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default AuthCode;
