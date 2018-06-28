import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Wallet from './views/Wallet.vue';
import transactions from './views/Transactions.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Wallet,
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: Wallet,
    },
    {
      path: '/wallet/compartment/:cid/transactions',
      name: 'transactions',
      component: transactions,
      props: true,
    },
  ],
});
