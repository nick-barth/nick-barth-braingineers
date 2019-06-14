<template>
  <div>
    <div class="Day">
      Daily Forcast for {{dayTitle}}
      <div v-if="this.forecasts.length > 0" class="About__forecast-container">
        <div class="About__time-toggle">
          <bg-select
            label="Time Period"
            @change="changeTime"
            :value="this.timePeriod"
            :options="[{value: 12, label: '12 Hours'}, {value: 6, label: '6 Hours'}]"
          ></bg-select>
        </div>
        <bg-line-chart
          :chartData="chartData"
          :options="{responsive: true, maintainAspectRatio: false}"
        />
      </div>
      <bg-loader :dark="true" v-else/>
    </div>
  </div>
</template>

<style scoped>
@import "styles.css";
</style>


<script>
import axios from "axios";
import moment from "moment";
import BgSelect from "@/components/BgSelect";
import BgCard from "@/components/BgCard";
import BgLoader from "@/components/BgLoader";
import BgLineChart from "@/components/BgLineChart";

import forcastData from "../../forcastSingle.json";

export default {
  name: "Day",
  components: {
    BgSelect,
    BgLineChart,
    BgLoader
  },
  data: function() {
    return {
      forecasts: [],
      timePeriod: 12
    };
  },
  methods: {
    formatChartData() {
      const slicedForecasts = this.forecasts.slice(0, this.timePeriod);
      this.chartData = {
        labels: slicedForecasts.map(day => {
          return moment(day.DateTime).format("HH:MM");
        }),
        datasets: [
          {
            label: "Temperature",
            data: slicedForecasts.map(day => {
              return {
                y: day.Temperature.Value,
                x: moment(day.DateTime).format("HH")
              };
            }),
            backgroundColor: "rgba(46, 118, 192, 0.45)"
          }
        ]
      };
    },
    changeTime(newTime) {
      this.timePeriod = newTime;
      this.formatChartData();
    },
    fetchData() {
      axios
        .get(
          `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${
            this.$route.query.location
          }?apikey=AHzBgmQPIbJ2fUBKNGvuWbzNguOwcHba&details=true`
        )
        .then(response => {
          this.forecasts = response.data;
          this.formatChartData();
        });
    }
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    dayTitle() {
      return (
        this.$route.params.date.charAt(0).toUpperCase() +
        this.$route.params.date.slice(1)
      );
    }
  }
};
</script>
