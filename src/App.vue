<template>
   <div id="app" class="full-screen-app">
      <nav class="main-nav is-collapse">
         <ul class="main-nav-list">
            <li>
               <font-awesome-icon icon="expand" v-on:click="toggleFullScreen()" />
            </li>
            <li>
               <font-awesome-icon icon="tachometer-alt" />
            </li>
            <li>
               <font-awesome-icon icon="wallet" v-on:click="$router.push('/wallet')" />
            </li>
            <!-- <li> -->
               <!-- <font-awesome-icon icon="truck-loading" v-on:click="toggleOpenLoadModal()" /> -->
            <!-- </li> -->
            <!-- <li>
               <font-awesome-icon icon="box" v-on:click="move('unload')" />
            </li> -->
         </ul>
      </nav>
      <section class="is-fullwidth is-scrollable-y is-dark-dark">
         <div class="is-center has-text-white" style="padding: 0.7rem;">
            TabNova - Cold Chain Dashboard
         </div>
         <router-view/>
      </section>
   </div>
</template>
<script>

import Vue from 'vue';
import fullscreen from 'vue-fullscreen';
import Axios from 'axios';

Vue.use(fullscreen);

export default {
  created() {

  },

  beforeMount() {

  },

  mounted() {
    // console.log(this.$store.getters);
  },

  methods: {
    toggleFullScreen() {
      this.$fullscreen.toggle(document.querySelector('.full-screen-app'), {
        wrap: false,
        callback: this.fullscreenChange,
      });
    },

    fullscreenChange(fullscreenVar) {
      this.fullscreen = fullscreenVar;
    },
  },

  data() {
    return {
      fullscreen: false,
    };
  },
};

</script>

<style lang="scss">
@import './../node_modules/bulma/bulma';
@import './../node_modules/bulma-admin-bar/sass/bulma-admin-bar.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.is-dark-dark {
  background: #353131;
}
</style>
