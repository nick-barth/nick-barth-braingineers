<template>
  <router-link v-bind:to="`day/${formatDate.toLowerCase()}`">
    <div class="BgCard">
      <h2 class="BgCard__date">{{formatDate}}</h2>
      <img
        class="BgCard__icon"
        :src="`https://developer.accuweather.com/sites/default/files/${stolenIcon}-s.png`"
        alt="weathericon"
      >
      <div class="BgCard__content-container">
        <div class="BgCard__temp BgCard__temp--min">{{minTemp}}</div>
        <div class="BgCard__temp BgCard__temp--avg">{{avgTemp}}</div>
        <div class="BgCard__temp BgCard__temp--max">{{maxTemp}}</div>
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
    avgTemp: Number,
    icon: Number,
    date: String
  },
  computed: {
    stolenIcon: function() {
      return ("0" + this.icon).slice(-2);
    },
    formatDate: function() {
      return moment(this.date).format("dddd");
    }
  },
  components: {
    BgButton
  },
  methods: {}
};
</script>
