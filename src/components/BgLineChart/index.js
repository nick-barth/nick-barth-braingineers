import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  date: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: true
    }
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
