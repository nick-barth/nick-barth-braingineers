import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
