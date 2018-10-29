import Axios from 'axios';

export default {
  namespaced: true,
  state: {
    fruitBowl: ['orange', 'bananna', 'apple', 'grape', 'kiwi', 'kumquat', 'mango', 'apricot', 'raspberry', 'blueberry', 'blackberry', 'plum', 'cherry', 'Huckleberry', 'jackfruit'],
  },

  mutations: {
    SET_ITEM(state) {
      state.count += 1;
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
      Axios.post('http://127.0.0.1:3000/item/move', { name: payload.item, compartment_id: payload.cid }).then((response) => {
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
