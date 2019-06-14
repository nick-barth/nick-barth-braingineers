<template>
  <router-link
    class="BgCard"
    v-bind:to="`day/${formatDate.toLowerCase()}/?location=${locationKey}`"
  >
    <h3 class="BgCard__date">{{formatDate}}</h3>
    <img
      class="BgCard__icon"
      :src="`https://developer.accuweather.com/sites/default/files/${stolenIcon}-s.png`"
      alt="weathericon"
    >
    <div class="BgCard__content-container">
      <div class="BgCard__temp BgCard__temp--min">
        <span class="BgCard__temp--label">lo:</span>
        {{minTemp}}
      </div>
      <div class="BgCard__temp BgCard__temp--avg">{{averageTemp}}</div>
      <div class="BgCard__temp BgCard__temp--max">
        <span class="BgCard__temp--label">hi:</span>
        {{maxTemp}}
      </div>
    </div>
  </router-link>
</template>

<style scoped>
@import "./styles.css";
</style>

<script>
import BgButton from "@/components/BgButton";
import moment from "moment";

export default {
  name: "BgCard",
  props: {
    maxTemp: Number,
    minTemp: Number,
    icon: Number,
    date: String,
    locationKey: String
  },
  computed: {
    stolenIcon: function() {
      return ("0" + this.icon).slice(-2);
    },
    formatDate: function() {
      return moment(this.date).format("dddd");
    },
    averageTemp: function() {
      return Math.round((this.maxTemp + this.minTemp) / 2);
    }
  },
  components: {
    BgButton
  },
  methods: {}
};
</script>
