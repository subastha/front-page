import axios from 'axios';
import store from '../../../store';

const BASE_URL = 'http://localhost:8000/api';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
    Authorization: `Bearer ${store.getters.token}`,
  },
});
