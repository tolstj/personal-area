import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3001/';

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + 'login', {
        email,
        password,
      })
      .then( res => {
        if (res.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  // getCurrentUser() {
  //   return JSON.parse(localStorage.getItem('user'));
  // }

  isAuth() {
    return axios.get(API_URL + 'isAuth', { headers: authHeader() });
  }
}

export default new AuthService();
