import { Line, mixins } from 'vue-chartjs';

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options', 'node'],

  data() {
    return {
      gradient: null,
      gradient2: null,
      gradient3: null,
    };
  },

  beforeMount() {
    // this.$store.subscribe((mutation, state) => {
    //   if (mutation.type === 'mempool/SET_MEMPOOL') {
    //     console.log(state.mempool);
    //   }
    // });
  },

  mounted() {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, 'rgba(255, 99, 132, 0.5)');
    this.gradient.addColorStop(0.5, 'rgba(255, 99, 132, 0.25)');
    this.gradient.addColorStop(1, 'rgba(255, 99, 132, 0)');

    this.gradient2.addColorStop(0, 'rgba(255, 159, 64, 0.9)');
    this.gradient2.addColorStop(0.5, 'rgba(255, 159, 64, 0.25)');
    this.gradient2.addColorStop(1, 'rgba(255, 159, 64, 0)');

    this.gradient3.addColorStop(0, 'rgba(75, 192, 192, 0.9)');
    this.gradient3.addColorStop(0.5, 'rgba(75, 192, 192, 0.25)');
    this.gradient3.addColorStop(1, 'rgba(75, 192, 192, 0)');

    this.renderChart(
      this.chartData,
      this.options,
    );
  },
};
