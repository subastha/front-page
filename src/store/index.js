import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import application from './modules/application';
// import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  // getters,
  modules: {
    user,
    application,
  },
});

// this.$store.commit('token', token);
// computed: {
//   ...mapGetters({
//      registrations: 'registrations',
//      total: 'totalRegistrations'
//  })
// }
// if actions then this.$store.dispath('token', token)
