/* eslint-disable import/prefer-default-export */
import store from '@/store';

export const commonErrorHandler = error => console.log(error);

export function HttpErrorHandler(error) {
  console.log(error.response);
  switch (error.response.data.error.type) {
    case 'AUTHENTICATION_ERROR':
      store.commit('isLoggedIn', false);
      if (this.$router.currentRoute.name !== 'Login') {
        this.$router.push('Login');
      }
      break;
    default:
      break;
  }
}

export function HttpTokenValidationSuccessHandler(response) {
  console.log('valid', response);
  this.isLoggedIn(true);
  // this.$router.push('Base');
}

