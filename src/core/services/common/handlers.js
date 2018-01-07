/* eslint-disable import/prefer-default-export */
export const commonErrorHandler = error => console.log(error);

export function HttpErrorHandler(error) {
  console.log(error.response);
  switch (error.response.data.error.type) {
    case 'AUTHENTICATION_ERROR':
      if (this.$router.currentRoute.name !== 'Login') {
        this.$router.push('Login');
      }
      break;
    default:
      break;
  }
}

