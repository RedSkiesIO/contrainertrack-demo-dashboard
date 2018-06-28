import Axios from 'axios';

export default {
  namespaced: true,
  state: {
    readings: {
      temperature: [],
      rssi: [],
      pressure: [],
      humidity: [],
    },
  },
  mutations: {
    ADD_READING(state, payload) {
      state.readings.temperature = state.readings.temperature.concat(payload.data.temperature);
      state.readings.rssi = state.readings.rssi.concat(payload.data.rssi);
      state.readings.pressure = state.readings.pressure.concat(payload.data.pressure);
      state.readings.humidity = state.readings.humidity.concat(payload.data.humidity);
    },
  },

  getters: {
    GET_READING(state) {
      return state;
    },
  },

  actions: {
    getReadings: ({ commit }, payload) => new Promise((resolve, reject) => {
      Axios.get(`http://localhost:3000/reading/mimic/${payload}`).then((response) => {
        commit('ADD_READING', response);
        resolve(response);
      }).catch((err) => {
        console.log(err);
      }, (error) => {
        reject(error);
      });
    }),
  },
};
