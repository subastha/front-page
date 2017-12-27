import HttpBaseService from './HttpBaseService';
// import store from '../../../store';

export default {
  get(url, param) {
    return HttpBaseService.get(url, {
      params: param,
    });
  },
  post(url, param) {
    return HttpBaseService.post(url, {
      params: param,
    });
  },
  put() {

  },
  delete() {

  },
};
