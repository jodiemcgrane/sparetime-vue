<!--
@Date:   2021-02-22T10:58:35+00:00
@Last modified time: 2021-02-28T19:07:43+00:00
-->
<template>
<div id="app">
  <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
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
        labels: ["Green", "Red", "Blue"],
        datasets: [{
          label: "Data One",
          backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
          data: [1, 10, 5]
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
