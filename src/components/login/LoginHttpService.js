import HttpService from '@/core/services/http/HttpService';
import store from '@/store';

export default {
  signin(params) {
    return new Promise(((resolve, reject) => {
      HttpService.post('signin', params)
        .then((response) => {
          console.log('store', store);
          store.commit('user', response.data.user);
          store.commit('isLoggedIn', true);
          store.commit('applications', response.data.applications);
          resolve(response.data);
        }, error => reject(error));
        // todo: create error type in PHP and when you get AUTH_ERROR do re auth logic
    }));
  },
  info() {
    return HttpService.get('user/info');
  },
};
