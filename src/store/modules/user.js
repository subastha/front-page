import userFactory from './userFactory';

const state = {
  user: null,
  isLoggedIn: localStorage.getItem('isLoggedIn') || false,
};

const getters = {
  token: currentState => (currentState.isLoggedIn
    ? localStorage.getItem('token') || (currentState.user ? currentState.user.token : null)
    : localStorage.getItem('token')),
  isLoggedIn: currentState => currentState.isLoggedIn,
};

const mutations = {
  token(currentState, token) {
    currentState.user.token = token;
    currentState.isLoggedIn = true;
    localStorage.setItem('token', token);
  },
  user(currentState, user) {
    currentState.user = userFactory.create(user);
    console.log(currentState.user);
    localStorage.setItem('token', user.token);
  },
  isLoggedIn(currentState, status) {
    currentState.isLoggedIn = status;
    localStorage.setItem('isLoggedIn', status);
  },
};

const actions = {
  token(context, token) {
    context.commit('token', token); // make async requests like validate here
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
