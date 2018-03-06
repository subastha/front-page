import HttpService from '@/core/services/http/HttpService';

export default {
  register(params) {
    return HttpService.post('register', params);

    // console.log(HttpService);
  },
};
