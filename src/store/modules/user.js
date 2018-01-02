const state = {
  token: '',
  isLoggedIn: false,
};

const getters = {
  token: currentState => currentState.token || localStorage.getItem('token'),
};

const mutations = {
  token(currentState, token) {
    currentState.token = token;
    localStorage.setItem('token', token);
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
