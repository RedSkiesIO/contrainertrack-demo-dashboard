<template>
<section>
    <div class="columns">
  <div class="column is-three-fifths is-offset-one-fifth has-text-white">
    <div><h1>{{ $route.params.cid }} History</h1></div>
    <table class="table is-dark-dark has-text-white is-fullwidth">
        <thead class="has-text-white">
            <tr class="has-text-white">
                <td class="has-text-white">txid</td>
                <td>&nbsp;</td>
                <td class="has-text-white">item</td>
            </tr>
        </thead>
        <tbody>
          <tr v-for="compartiment in history.compartiments" v-bind:key='id'>
              <td>{{ compartiment.id }}</td>
              <td>&nbsp;</td>
              <td>
                  <span v-for="element in compartiment.items" class="item">
                    <span>&nbsp; ,</span><span>{{ element }}</span>
                  </span>
                </td>
          </tr>
        </tbody>
    </table>
    </div></div>
</section>
</template>

<script>
import Axios from 'axios';

export default {

    data() {
        return {
            history: null
        }
    },

    beforeMount() {
        Axios.get(`https://10.84.172.52/api/?app=nova&cmd=query&compartiment=${this.$route.params.cid}`).then((response) => {
            console.log(response);
            if (response.status === 200) {
                this.history = response.data
            }
            console.log(this.history);
         }).catch((err) => {
            console.log(err);
        }, (error) => {
            reject(error);
        });
    }
}
</script>