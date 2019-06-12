<template>
  <div class="Home">
    <div class="Home__search-container">
      <h2>Search</h2>
      <div class="Nav__location-select">
        <bg-input @change="updateSearchValue" label="Search by location" placeholder="Amsterdam"/>
        <bg-button :isLoading="isSearching" @click="fetchSearch" text="Search"></bg-button>
      </div>
    </div>
    <div v-if="this.forecasts.length > 0" class="Home__forecast-container">
      <h2>{{this.city}}</h2>
      <h2>{{this.headline}}</h2>
      <div class="Home__forecast">
        <bg-card
          v-bind:key="forecast.date"
          :date="forecast.Date"
          :maxTemp="forecast.Temperature.Maximum.Value"
          :minTemp="forecast.Temperature.Minimum.Value"
          :icon="forecast.Day.Icon"
          :locationKey="locationKey"
          v-for="forecast in this.forecasts"
        ></bg-card>
      </div>
      <div class="Home__charts">
        <div class="Home__chart-container">
          <h2>Temperature</h2>
          <div class="Home__chart">
            <bg-line-chart :chartData="chartData" :options="{responsive: true}"/>
          </div>
        </div>
        <div class="Home__chart-container">
          <h2>Hours of Sunlight</h2>
          <div class="Home__chart">
            <bg-line-chart :chartData="chartData" :options="{responsive: true}"/>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="Home__please-search">Please search for a location</div>
    <bg-loader :dark="true" v-if="isLoading"/>
  </div>
</template>

<style scoped>
@import "styles.css";
</style>

<script>
import axios from "axios";
import moment from "moment";
import BgCard from "@/components/BgCard";
import BgButton from "@/components/BgButton";
import BgLoader from "@/components/BgLoader";
import BgInput from "@/components/BgInput";
import BgLineChart from "@/components/BgLineChart";

import forcastData from "../../forcastdata.json";

export default {
  name: "home",
  components: {
    BgCard,
    BgButton,
    BgInput,
    BgLoader,
    BgLineChart
  },
  data: function() {
    return {
      searchValue: "",
      locationKey: null,
      forecasts: [],
      chartData: {},
      location: null,
      isLoading: false,
      isSearching: false,
      city: ""
    };
  },
  mounted() {
    this.city = "amsterdo";
    this.locationKey = 222;
    this.forecasts = forcastData.DailyForecasts;
    this.headline = forcastData.Headline.Text;
    console.log(this.forecasts);

    this.chartData = {
      labels: this.forecasts.map(day => {
        return moment(day.Date).format("ddd");
      }),
      datasets: [
        {
          label: "High",
          data: this.forecasts.map(day => {
            return { y: day.Temperature.Maximum.Value, x: day.Date };
          }),
          backgroundColor: "rgba(46, 118, 192, 0.45)"
        },
        {
          label: "Low",
          data: this.forecasts.map(day => {
            return { y: day.Temperature.Minimum.Value, x: day.Date };
          }),
          backgroundColor: "rgba(46, 118, 192, 0.75)"
        }
      ]
    };
  },
  methods: {
    updateSearchValue(value) {
      this.searchValue = value;
    },
    fetchData() {
      this.isLoading = true;
      axios
        .get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${
            this.locationKey
          }?apikey=AHzBgmQPIbJ2fUBKNGvuWbzNguOwcHba&details=true`
        )
        .then(response => {
          this.forecasts = response.data.DailyForecasts;
          this.headline = response.data.Headline.Text;

          this.chartData = {
            labels: this.forecasts.map(day => {
              return moment(day.Date).format("ddd");
            }),
            datasets: [
              {
                label: "High",
                data: this.forecasts.map(day => {
                  return { y: day.Temperature.Maximum.Value, x: day.Date };
                })
              },
              {
                label: "Low",
                data: this.forecasts.map(day => {
                  return { y: day.Temperature.Minimum.Value, x: day.Date };
                })
              }
            ]
          };
          this.isLoading = false;
        });
    },
    fetchSearch() {
      this.isSearching = true;
      axios
        .get(
          ` http://dataservice.accuweather.com/locations/v1/cities/search?apikey=AHzBgmQPIbJ2fUBKNGvuWbzNguOwcHba&q=${
            this.searchValue
          }`
        )
        .then(response => {
          const city = response.data[0];
          this.city = city.LocalizedName;
          this.locationKey = city.Key;
          this.cityName = city.LocalizedName;
          this.isSearching = false;
          this.fetchData();
        });
    }
  }
};
</script>
