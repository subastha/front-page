/* eslint-disable import/prefer-default-export */

import WebtilesHttpService from './WebtilesHttpService';

function create(webtile) {
  let id = webtile.id;
  let name = webtile.name;
  let url = webtile.url;
  let imageUrl = webtile.image_url;
  let order = webtile.order;

  const obj = {};

  Object.defineProperties(obj, {
    id: {
      configurable: false,
      enumerable: true,
      get: () => id,
      set: (value) => {
        id = value;
      },
    },
    name: {
      configurable: false,
      enumerable: true,
      get: () => name,
      set: (value) => {
        name = value;
      },
    },
    url: {
      configurable: false,
      enumerable: true,
      get: () => url,
      set: (value) => {
        url = value;
      },
    },
    imageUrl: {
      configurable: false,
      enumerable: true,
      get: () => imageUrl,
      set: (value) => {
        imageUrl = value;
      },
    },
    order: {
      configurable: false,
      enumerable: true,
      get: () => order,
      set: (value) => {
        order = value;
      },
    },
  });

// eslint-disable-next-line
  obj.delete = function () {
    return WebtilesHttpService.deleteWebtile(obj);
  };

// eslint-disable-next-line
  obj.update = function () {
    return WebtilesHttpService.updateWebtile({
      id: this.id,
      name: this.name,
      url: this.url,
      imageUrl: this.imageUrl,
      order: this.order,
    });
  };
  return obj;
}

function generate(webtile) {
  return WebtilesHttpService.createWebtile(webtile)
    .then(response => Promise.resolve(create(response.data.webtile)));
}

export const webtileFactory = {
  create,
  generate,
};

