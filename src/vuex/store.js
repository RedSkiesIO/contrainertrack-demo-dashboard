// import libs
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// import store modules
import itemModule from './item';
import trackModule from './track';
import mempoolModule from './mempool';
import compartmentModule from './compartment';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    item: itemModule,
    track: trackModule,
    mempool: mempoolModule,
    compartment: compartmentModule,
  },
  plugins: [createPersistedState()],
});
