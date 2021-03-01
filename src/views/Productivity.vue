<!--
@Date:   2021-02-22T10:58:35+00:00
@Last modified time: 2021-03-01T09:29:24+00:00
-->
<template>
<div id="app">
  <v-row justify="center">
    <v-col cols="6">
      <v-card>
        <v-card-text>
          <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
import PieChart from "../components/Charts/PieChart.js";
export default {
  name: "App",
  components: {
    PieChart
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Completed", "Not Completed"],
        datasets: [{
          label: "Data One",
          backgroundColor: ["#41B883", "#E46651"],
          data: [1, 10]
        }]
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
