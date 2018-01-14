import HttpBaseService from './HttpBaseService';
// import { HttpErrorHandler } from '../common/handlers';
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
  put(url, param) {
    return HttpBaseService.create().put(url, param);
  },
  delete(url, param) {
    return HttpBaseService.create().delete(url, param);
  },
};
