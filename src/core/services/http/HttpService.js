import HttpBaseService from './HttpBaseService';
// import store from '../../../store';

export default {
  get(url, param) {
    return HttpBaseService.create().get(url, {
      params: param,
    });
  },
  post(url, param) {
    return HttpBaseService.create().post(url, param);
  },
  put() {

  },
  delete() {

  },
};
