<template>
<div class="columns">
  <div class="column is-three-fifths is-offset-one-fifth">
    <div class="about has-text-white">
      <table class="table is-dark-dark has-text-white is-fullwidth">
        <thead class="has-text-white">
          <tr class="is-pulled-peft" style="text-align: left" v-on:click="createCompartment()" >Add Compartment <font-awesome-icon icon="plus" /></tr>
          <tr>&nbsp;</tr>
          <tr class="has-text-white">
            <td class="has-text-white">Compartment ID</td>
            <td class="has-text-white">Load</td>
            <td class="has-text-white">Unload</td>
            <td class="has-text-white">info</td>            
          </tr>
        </thead>
        <tbody>
          <tr v-for="compartiment in this.$store.getters['compartment/GET_ALL_COMPARTMENTS']" v-bind:key='compartiment'>
            <td>{{ compartiment }}</td>
            <td>
              <div href="#" :cid="compartiment" v-on:click="toggleOpenLoadModal(compartiment, 'load')">
                <font-awesome-icon icon="truck-loading" />
              </div>
            </td>
            <td>
              <font-awesome-icon icon="box" v-on:click="toggleOpenUnLoadModal(compartiment, 'unload')" />
            </td>
            <td>
              <div v-on:click="goTransactions(compartiment)"><font-awesome-icon icon="eye" /></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- load modal -->
  <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
            <!-- compartment field -->
            <!-- <div class="field is-horizontal">
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
            </div> -->
            <!-- end field -->
            <!-- fruit bowl field -->
            <div class="field is-horizontal">
              <div class="columns">
                <div class="column is-6">
                  <div class="field-label is-normal">
                    <label class="label">Select Item</label>
                  </div>
                </div>
                <div class="column is-6">
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
                <div class="column">
                  <button class="button is-danger" v-on:click="moveItem()">Move Item</button>
                </div>
              </div>
            </div>
            
            <!-- end field -->
        </div>
      </div>
      <button class="modal-close is-large" v-on:click="toggleCloseLoadModal()" aria-label="close"></button>
  </div>
  <!-- end load modal -->


</div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      fullscreen: false,
      transaction: {
        cid: null,
        item: null,
        action: null,
      },
    };
  },

  methods: {

    ...mapActions({
      createCompartment: 'compartment/createCompartment',
    }), 
   
    toggleOpenLoadModal(compartiment, action) {
      this.transaction.cid = compartiment;
      this.transaction.action = action;
      const modal = document.querySelector('.modal');
      modal.classList.add('is-active');
    },

    toggleOpenUnLoadModal(compartiment, action) {
      this.transaction.cid = compartiment;
      this.transaction.action = action;
      const modal = document.querySelector('.modal');
      modal.classList.add('is-active');
    },    

    toggleCloseLoadModal() {
      const modal = document.querySelector('.modal');
      modal.classList.remove('is-active');
    },

    moveItem() {
      this.$store.dispatch('item/move', this.transaction).then((response) => {
        console.log('trace resaponse suc');
        console.log(this.$store.state.track.readings.pressure.map((item) => {
          return item.pressure
        }));
        this.toggleCloseLoadModal();
      });
    },
    
    goTransactions(compartiment) {
      this.$router.push(`/wallet/compartment/${compartiment}/transactions`);
    }
  },
}
</script>