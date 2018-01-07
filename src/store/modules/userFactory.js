function create(user) {
  let name = user.name;
  let email = user.email;
  let token = user.token || localStorage.getItem('token');
  let isLoggedIn;

  const obj = {};

  Object.defineProperties(obj, {
    name: {
      configurable: false,
      enumerable: true,
      get: () => name,
      set: (value) => {
        name = value;
      },
    },
    email: {
      configurable: false,
      enumerable: true,
      get: () => email,
      set: (value) => {
        email = value;
      },
    },
    token: {
      configurable: false,
      enumerable: true,
      get: () => token,
      set: (value) => {
        localStorage.setItem('token', value);
        token = value;
      },
    },
    isLoggedIn: {
      configurable: false,
      enumerable: true,
      get: () => isLoggedIn,
      set: (value) => {
        isLoggedIn = value;
      },
    },
  });

  return obj;
}

export default {
  create: user => create(user),
};

