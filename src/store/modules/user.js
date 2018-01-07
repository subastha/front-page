import userFactory from './userFactory';

const state = {
  user: null,
  isLoggedIn: false,
};

const getters = {
  token: currentState => (currentState.isLoggedIn
    ? currentState.user.token || localStorage.getItem('token')
    : ''),
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
    currentState.isLoggedIn = true;
  },
  loggedIn(currentState, status) {
    currentState.isLoggedIn = status;
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
