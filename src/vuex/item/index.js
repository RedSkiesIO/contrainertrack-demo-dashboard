import Axios from 'axios';

export default {
  namespaced: true,
  state: {
    fruitBowl: ['orange', 'bananna', 'apple', 'grape', 'kiwi', 'kumquat', 'mango', 'apricot', 'raspberry', 'blueberry', 'blackberry', 'plum', 'cherry', 'Huckleberry', 'jackfruit'],
  },

  mutations: {
    SET_ITEM(state) {
      state.count++;
    },
  },

  getters: {

    GET_FRUIT(state) {
      return state.fruitBowl;
    },
  },

  actions: {
    move: ({ commit }, payload) => new Promise((resolve, reject) => {
      console.log(payload);
      Axios.get(`https://10.84.172.52/api/?app=nova&cmd=move&compartiment=${payload.cid}&item=${payload.item}&action=${payload.action}&send=1`, payload).then((response) => {
        commit('SET_ITEM', response);
        resolve(response);
      }).catch((err) => {
        console.log(err);
      }, (error) => {
        reject(error);
      });
    }),
  },
};
