import HttpService from '../../core/services/http/HttpService';

export default {
  getWebtiles() {
    return HttpService.get('webtiles');
  },
};
