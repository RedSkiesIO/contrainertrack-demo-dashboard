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
               <font-awesome-icon icon="th" v-on:click="createCompartment()" />
            </li>
            <li>
               <font-awesome-icon icon="truck-loading" v-on:click="toggleOpenLoadModal()" />
            </li>
            <li>
               <font-awesome-icon icon="box" v-on:click="move('unload')" />
            </li>
         </ul>
      </nav>
      <section class="is-fullwidth is-scrollable-y is-dark-dark">
         <div class="is-center has-text-white" style="padding: 0.7rem;">
            TabNova - Cold Chain Dashboard
         </div>
         <router-view/>
      </section>
      <!-- load modal -->
      <div class="modal">
         <div class="modal-background"></div>
         <div class="modal-content">
            <div class="box">
               <!-- compartment field -->
               <div class="field is-horizontal">
                  <div class="columns">
                     <div class="column is-6">
                        <div class="field-label is-normal">
                           <label class="label">Select Compartment</label>
                        </div>
                     </div>
                     <div class="column">
                        <div class="field-body">
                           <div class="field is-narrow">
                              <div class="control">
                                 <div class="select is-fullwidth">
                                    <select v-model="transaction.cid">
                                       <option v-for="compartiment in this.$store.getters['compartment/GET_ALL_COMPARTMENTS']" v-bind:key='compartiment'>{{ compartiment }}</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- end field -->
               <!-- fruit bowl field -->
               <div class="field is-horizontal">
                  <div class="columns">
                    <div class="column is-6">
                      <div class="field-label is-normal">
                        <label class="label">Select Item</label>
                      </div>
                    </div>
                    <div class="column">
                      <div class="field-body">
                        <div class="field is-narrow">
                          <div class="control">
                              <div class="select is-fullwidth">
                                <select v-model="transaction.item">
                                    <option v-for="fruit in this.$store.getters['item/GET_FRUIT']" v-bind:key='fruit'>{{fruit}}</option>
                                </select>
                              </div>
                          </div>
                        </div>
                      </div>                    
                    </div>
                  </div>
               </div>
               <!-- end field -->
               <button class="button is-danger" v-on:click="moveItem('load')">Load Item</button>
            </div>
         </div>
         <button class="modal-close is-large" v-on:click="toggleCloseLoadModal()" aria-label="close"></button>
      </div>
      <!-- end load modal -->     
   </div>
</template>
<script>

import Vue from 'vue';
import fullscreen from 'vue-fullscreen';
import { mapActions, mapGetters } from 'vuex';

Vue.use(fullscreen);

export default {
  created() {

  },

  beforeMount() {

  },

  mounted() {
      console.log(this.$store.getters);
  },

  methods: {
    toggleFullScreen() {
      this.$fullscreen.toggle(document.querySelector('.full-screen-app'), {
        wrap: false,
        callback: this.fullscreenChange,
      });
    },

    toggleOpenLoadModal() {
      const modal = document.querySelector('.modal');
      modal.classList.add('is-active');
    },

    toggleCloseLoadModal() {
      const modal = document.querySelector('.modal');
      modal.classList.remove('is-active');
    },      

    fullscreenChange(fullscreenVar) {
      this.fullscreen = fullscreenVar;
    },

    moveItem(action) {
      this.transaction.action = action;
      this.$store.dispatch('item/move', this.transaction).then((response) => {
        console.log(response);
        if (response.status === 200) {
          // send sensor readings
        }
        // this.$store.subscribe((mutation, state) => {
        //   if (mutation.type === 'item/SET_ITEM') {
        //     console.log('item loaded');
        //   }
        // });        
      });
    },

    ...mapActions({
      createCompartment: 'compartment/createCompartment'
    })    
  },

  data() {
    return {
      fullscreen: false,
      transaction: {
        cid: null,
        item: null,
        action: null, 
      }
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
