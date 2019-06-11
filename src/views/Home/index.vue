<template>
  <div>
    <div class="Home">
      <h1>Welcome to the Weather App</h1>
      <div class="Home__forecast">
        <BgCard
          v-bind:key="forecast.date"
          :date="forecast.Date"
          :maxTemp="forecast.Temperature.Maximum.Value"
          :avgTemp="forecast.Temperature.Maximum.Value + forecast.Temperature.Minimum.Value / 2"
          :minTemp="forecast.Temperature.Maximum.Value"
          :icon="forecast.Day.Icon"
          v-for="forecast in this.forecasts.DailyForecasts"
        ></BgCard>
      </div>
      <div class="Home__chart">
        <BgLineChart :chartdata="chartData"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "styles.css";
</style>

<script>
import axios from "axios";
import BgButton from "@/components/BgButton";
import BgInput from "@/components/BgInput";
import BgCard from "@/components/BgCard";
import BgLineChart from "@/components/BgLineChart";

import forcastData from "../../forcastdata.json";

export default {
  name: "home",
  components: {
    BgButton,
    BgInput,
    BgCard,
    BgLineChart
  },
  data: function() {
    return {
      forecasts: [],
      chartData: {
        datasets: [{ label: "Temperatures", data: [100, 90, 120, 60, 80] }]
      }
    };
  },
  methods: {
    fetchData() {
      // axios
      //   .get(
      //     "http://dataservice.accuweather.com/forecasts/v1/hourly/120hour/249758?apikey=AHzBgmQPIbJ2fUBKNGvuWbzNguOwcHba"
      //   )
      //   .then(response => {
      //     //console.log(response);
      //   });
      this.forecasts = forcastData;
      console.log(forcastData);
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
