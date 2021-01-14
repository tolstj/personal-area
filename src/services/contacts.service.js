import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3001/';

class ContactsService {
  getContacts() {
    return axios.get(API_URL + 'contacts',
      { headers: authHeader() },
    );
  }

  addContact() {
    return axios.post(API_URL + 'contacts', 
      { name: 'Новый контакт', tel: '88888888888' },
      { headers: authHeader() },
    );
  }

  removeContact(id) {
    return axios.delete(API_URL + `contacts/${id}`, 
      { headers: authHeader() },
    );
  }

  changeContactField(id, changing) {
    return axios.put(API_URL + `contacts/${id}`,
      { name: changing.name, tel: changing.tel },
      { headers: authHeader() }, 
    );
  }

  searchContact(query) {
    return axios.get(API_URL + `contacts?q=${query}`,
      { headers: authHeader() },
    );
  }
}

export default new ContactsService();
