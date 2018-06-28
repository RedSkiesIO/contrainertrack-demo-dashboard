import Axios from 'axios';

export default {
  namespaced: true,
  state: {
    x: [],
    y: [],
  },

  mutations: {
    SET_MEMPOOL(state, payload) {
      console.log(payload.data.compartiments.length);
      if (payload.data.compartiments !== null) {
        const mempool = payload.data.compartiments.map(cid => cid.logbook.length);
        console.log(mempool);
      }
      // state[payload.node].x =
      // state[payload.node].x.concat(state[payload.node].x, payload.data.x);
      // state[payload.node].y =
      // state[payload.node].y.concat(state[payload.node].y, payload.data.y);
    },
  },

  getters: {
    getMempool(state) {
      return state;
    },
  },

  actions: {
    getMempool: ({ commit }) => new Promise((resolve, reject) => {
      Axios.get('https://10.84.172.95/api/?app=nova&cmd=mempool').then((response) => {
        commit('SET_MEMPOOL', response);
        resolve(response);
      }).catch((err) => {
        console.log(err);
      }, (error) => {
        reject(error);
      });
    }),
  },
};
