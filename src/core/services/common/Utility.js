/* eslint-disable import/prefer-default-export */

export function validateLink(url) {
  if (!/^(f|ht)tps?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
}
