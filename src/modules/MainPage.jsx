import '../styles/MainPage.css';
import { Context } from '../main';

const MainPage = () => {
  let userId = localStorage.getItem('userId');
  return <div>{userId}</div>;
};

export default MainPage;
