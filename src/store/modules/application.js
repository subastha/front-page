import applicationFactory from './applicationFactory';

const state = {
  applications: [],
};

const getters = {
  applications: currentStatus => currentStatus.applications,
};

const mutations = {
  applications(currentState, applications) {
    currentState.applications = applications.map(app => applicationFactory.create(app));
    console.log(currentState.applications);
    // applications.forEach((application) => {
    //   const index = currentState.applications.findIndex(app => app.id === application.id);
    //   if (index === -1) {
    //     currentState.applications.push(application);
    //   }
    // });
  },
};

const actions = {
  applications(context, apps) {
    context.commit('applications', apps); // make async requests like validate here
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
