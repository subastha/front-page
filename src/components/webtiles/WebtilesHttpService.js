import HttpService from '../../core/services/http/HttpService';

export default {
  getWebtiles() {
    return HttpService.get('webtiles');
  },
  createWebtile(webtile) {
    return HttpService.post('webtiles', webtile);
  },
  updateWebtile(webtile) {
    return HttpService.put(`webtiles/${webtile.id}`, webtile);
  },
  deleteWebtile(webtile) {
    return HttpService.delete(`webtiles/${webtile.id}`);
  },
};
