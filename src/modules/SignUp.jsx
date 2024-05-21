import '../styles/SignUp.css';
import { useContext, useState } from 'react';
import { Context } from '../main';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const { userStore } = useContext(Context);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReg = async (e) => {
    e.preventDefault();
    try {
      await userStore.postUser({ userName, email });
      console.log('okay');
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="wrapper-content-registration">
      <div className="registration-container">
        <h2>Регистрация</h2>
        <form>
          <div className="input-group">
            <label>Имя пользователя:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userName}
              onChange={handleLoginChange}></input>
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}></input>
          </div>
          <button type="submit" onClick={handleReg}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
