/**
 * @Date:   2021-02-28T19:05:47+00:00
 * @Last modified time: 2021-03-04T13:49:24+00:00
 */


import {
  Doughnut,
  //mixins
} from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["data", "options"],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.data, {
      borderWidth: "10px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "10px"
    });
  }
};
