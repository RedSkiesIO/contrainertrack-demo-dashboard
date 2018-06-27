import Axios from 'axios';

export default {
  namespaced: true,
  state: {
    1: {
      x: [],
      y: [],
    },
    2: {
      x: [],
      y: [],
    },
    3: {
      x: [],
      y: [],
    },
  },
  mutations: {
    SET_MEMPOOL(state, payload) {
      console.log(payload);
      state[payload.node].x = state[payload.node].x.concat(state[payload.node].x, payload.data.x);
      state[payload.node].y = state[payload.node].y.concat(state[payload.node].y, payload.data.y);
    },
  },

  getters: {
    getMempool(state) {
      return state;
    },
  },

  actions: {
    getMempool: ({ commit }, node) => new Promise((resolve, reject) => {
      Axios.get(`http://localhost:3000/mempool/${node}`).then((response) => {
        commit('SET_MEMPOOL', { node, data: response.data });
        resolve(response);
      }).catch((err) => {
        console.log(err);
      }, (error) => {
        reject(error);
      });
    }),
  },
};
