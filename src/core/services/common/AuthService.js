import HttpService from '../http/HttpService';

export default {
  validateToken() {
    return HttpService.get('user/info');
  },
};
