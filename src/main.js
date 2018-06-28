// core library
import Vue from 'vue';

// vendor libraries
import axios from 'axios';
import VueAxios from 'vue-axios';
import FetchData from 'vue-fetch-data';

// font awsome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTruck, faStore, faWarehouse, faTruckLoading, faTachometerAlt, faExpand, faBox, faTh, faEye, faPlus, faWallet } from '@fortawesome/free-solid-svg-icons';

// app components
import App from './App.vue';
import router from './router';
import store from './vuex/store';

Vue.use(FetchData);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(
  faTruck,
  faStore,
  faWarehouse,
  faTruckLoading,
  faTachometerAlt,
  faExpand,
  faBox,
  faTh,
  faEye,
  faPlus,
  faWallet,
);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
