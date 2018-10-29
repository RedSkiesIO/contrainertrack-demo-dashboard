<template>
   <section class="section hero is-fullheight is-dark" id="temp-chart">
      <div class="columns">
         <div class="column">
            <font-awesome-icon icon="warehouse" size="4x" class="supply-chain-step" />
         </div>
         <div class="column">
            <font-awesome-icon icon="truck" size="4x" class="supply-chain-step" />
         </div>
         <div class="column">
            <font-awesome-icon icon="store" size="4x" class="supply-chain-step" />
         </div>
      </div>
      <div class="columns">
         <div class="column is-one-quarter" v-show="this.$store.getters['track/GET_READING'].readings.length > 0">
            <div class="columns">
               <div class="column">
                  <mempool-chart
                    v-bind:node="1"
                    v-bind:chartData="datasetsfull"
                    v-bind:options="this.options"
                  >
                  </mempool-chart>
               </div>
            </div>
            <div class="columns">
               <div class="column">
                  <!-- <mempool-chart
                        v-bind:node="2"
                        v-bind:x="this.labels"
                        v-bind:y="this.mempool"
                      >
                      </mempool-chart> -->
               </div>
            </div>
            <div class="columns">
               <div class="column">
                  <!-- <mempool-chart
                          v-bind:node="3"
                          v-bind:x="this.labels"
                          v-bind:y="this.mempool"
                        >
                        </mempool-chart> -->
               </div>
            </div>
         </div>
         <div class="column is-two-quarter">
            <div class="columns">
               <div class="column">
                  <sensor-chart id="temp-chart-canvas" chart-data="datasetsfull"></sensor-chart>
               </div>
               <div class="column">
                  <!-- <sensor-chart id="pressure-chart-canvas"></sensor-chart> -->
               </div>
            </div>
            <div class="columns">
               <div class="column">
                  <!-- <sensor-chart id="humidity-chart-canvas"></sensor-chart> -->
               </div>
               <div class="column">
                  <!-- <sensor-chart id="rssi-chart-canvas"></sensor-chart> -->
               </div>
            </div>
            <div class="columns">
               <div class="column">
                  <h1 class="title">Recent Transactions</h1>
               </div>
            </div>
            <div class="columns">
               <div class="column">
                  12:02 - bhjsdhyfcgbcfkshfinmueriyn7ehigeyrnvhfnscjksdhfnvkjdhgmjk
               </div>
            </div>
            <div class="columns">
               <div class="column">
                  12:03 - bhjsdhyfcgbcfkshfinmueriyn7ehigeyrnvhfnscjksdhfnvkjdhgmjk
               </div>
            </div>
            <div class="columns">
               <div class="column">
                  12:04 - bhjsdhyfcgbcfkshfinmueriyn7ehigeyrnvhfnscjksdhfnvkjdhgmjk
               </div>
            </div>
            <div class="columns">
               <div class="column">
                  12:05 - bhjsdhyfcgbcfkshfinmueriyn7ehigeyrnvhfnscjksdhfnvkjdhgmjk
               </div>
            </div>
            <div class="columns">
               <div class="column">
                  12:06 - bhjsdhyfcgbcfkshfinmueriyn7ehigeyrnvhfnscjksdhfnvkjdhgmjk
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
// import Axios from 'axios';
import { mapGetters } from 'vuex';
import MempoolChart from '../components/Mempool';
import SensorChart from '../components/LineChart';

export default {
  name: 'home',
  components: {
    SensorChart,
    MempoolChart,
  },

  // computed: {
  //   ...mapState(['mempool'])
  // },

  fetch: {
    mempool: {
      commit: 'mempool/SET_MEMPOOL',
      url: 'https://10.84.172.95/api/?app=nova&cmd=mempool',
      poll: 1000,
    },
  },

  computed: {
    datasetsfull() {
      return {
        labels: [
          '1:00',
          '1:01',
          '1:02',
          '1:03',
          '1:04',
          '1:05',
          '1:06',
          '1:07',
          '1:08',
          '1:09',
          '1:10',
          '1:11',
          '1:12',
          '1:13',
          '1:14',
          '1:15',
          '1:16',
          '1:17',
          '1:18',
          '1:19',
          '1:20',
          '1:21',
        ],
        datasets: [
          {
            steppedLine: true,
            borderColor: '#FC2525',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: this.gradient,
            data: this.$store.state.track.readings.temperature.map((item) => {
              return item.temperature
              }),
          },
        ],
      };
    },
    ...mapGetters([
      'getMempool',
    ]),
  },

  created() {
    // Object.keys(this.nodes).forEach((node) => {
    //   this.$store.dispatch('mempool/getMempool', node).then((response) => {
    //     console.log(response);
    //   });
    // })
    // this.$socket.onmessage = (data) => console.log(data)
  },

  mounted() {
    // this.interval = setInterval( ()=> {
    //   this.$store.dispatch('mempool/getMempool');
    // }, 1000);
    console.log(this.$store.getters['track/GET_READING'].readings.length);
  },

  methods: {

  },
  data() {
    return {
      chartOptions: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Humidity',
      },
      responsive: true,
      maintainAspectRatio: false,
    },
    interval: null,
      nodes: {
        1: {
          ip: '10.84.172.19',
        },
        2: {
          ip: '10.84.172.19',
        },
        3: {
          ip: '10.84.172.19',
        },
      },
      chartData: {
        labels: this.x,
        datasets: [
          {
            steppedLine: true,
            borderColor: '#FC2525',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: this.gradient,
            data: this.$store.getters['mempool/getMempool'][1].y,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: `Node ${1} Mempool`,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style lang="scss">
.supply-chain-step path {
  -webkit-box-shadow: 0px 0px 3px 5px #f2e1f2;
  -moz-box-shadow: 0px 0px 3px 5px #f2e1f2;
  box-shadow: 0px 0px 3px 5px #f2e1f2;
}
</style>
