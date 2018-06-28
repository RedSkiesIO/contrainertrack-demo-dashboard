import { Line, mixins } from 'vue-chartjs';

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  data() {
    return {
      gradient: null,
      gradient2: null,
      gradient3: null,
    };
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

    this.renderChart(this.chartData, this.options);

    // this.renderChart(
    //   {
    //     labels: [
    //       'January',
    //       'February',
    //       'March',
    //       'April',
    //       'May',
    //       'June',
    //       'July',
    //     ],
    //     datasets: [
    //       {
    //         borderColor: '#FC2525',
    //         pointBackgroundColor: 'white',
    //         borderWidth: 1,
    //         pointBorderColor: 'white',
    //         backgroundColor: this.gradient,
    //         data: [40, 39, 10, 40, 39, 80, 40],
    //       },
    //       {
    //         borderColor: '#05CBE1',
    //         pointBackgroundColor: 'white',
    //         pointBorderColor: 'white',
    //         borderWidth: 1,
    //         backgroundColor: this.gradient2,
    //         data: [60, 55, 32, 10, 12, 12, 53],
    //       },
    //       {
    //         borderColor: '#05CBE1',
    //         pointBackgroundColor: 'white',
    //         pointBorderColor: 'white',
    //         borderWidth: 1,
    //         backgroundColor: this.gradient3,
    //         data: [58, 50, 38, 20, 10, 24, 50],
    //       },
    //     ],
    //   },
    //   {
    //     legend: {
    //       display: false,
    //     },
    //     title: {
    //       display: true,
    //       text: 'Humidity',
    //     },
    //     responsive: true,
    //     maintainAspectRatio: false,
    //   },
    // );
  },
};
