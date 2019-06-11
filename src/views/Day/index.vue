<template>
  <div>
    <div class="Day"></div>
  </div>
</template>


<script>
import axios from "axios";
import BgButton from "@/components/BgButton";
import BgInput from "@/components/BgInput";
import BgCard from "@/components/BgCard";

import forcastData from "../../forcastSingle.json";

export default {
  name: "Day",
  components: {
    BgButton,
    BgInput,
    BgCard
  },
  data: function() {
    return {
      forecasts: []
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
