import Axios from 'axios';

export default {
  namespaced: true,
  state: {
    cid: [],
  },

  mutations: {

    ADD_COMPARTMENT(state, response) {
      state.cid = state.cid.concat(response.compartiment);
    },

    // ADD_COMPARTMENT_SONSOR_READING(cid, payload) {
    //   this.state.cid[cid] = payload;
    // },
  },

  getters: {

    GET_ALL_COMPARTMENTS(state) {
      return state.cid;
    },

    GET_LAST_COMPARTMENT(state) {
      return state.cid[state.cid.length - 1];
    },
  },

  actions: {

    createCompartment: ({ commit }) => new Promise((resolve, reject) => {
      Axios.get('https://10.84.172.95/api/?app=nova&cmd=new_compartiment').then((response) => {
        console.log(response);
        commit('ADD_COMPARTMENT', response.data);
        resolve(response);
      }).catch((err) => {
        console.log(err);
      }, (error) => {
        reject(error);
      });
    }),

    getCompartment: ({ commit }, cid) => new Promise((resolve, reject) => {
      Axios.get(`http://127.0.0.1:3000/compartment/${cid}`).then((payload) => {
        commit('ADD_COMPARTMENT', cid, payload);
        resolve(payload);
      }).catch((err) => {
        console.log(err);
      }, (error) => {
        reject(error);
      });
    }),
  },
};
