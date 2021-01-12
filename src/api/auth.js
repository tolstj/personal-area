import api from './api.js';

function auth(email, password) {
  return api.post('/login', {email, password});
}

export default auth;
