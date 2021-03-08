<!--
@Date:   2021-02-22T10:58:35+00:00
@Last modified time: 2021-03-08T18:08:50+00:00
-->
<template>
<v-container>
  <div>
  <line-chart
  v-if="loaded"
  :chartdata="chartdata"
  />
</div>
</v-container>
</template>

<script>
import LineChart from '../components/Chart.vue'
import axios from 'axios';

export default {
  name: "Productivity",
  components: {
    LineChart,
  },
  data() {
    return {
      loaded: false,
      chartdata: []
    };
  },
  mounted() {
    this.loaded = false
    this.getEvents()
  },
  methods: {
    getEvents() {

      let token = localStorage.getItem('token');

      axios.get('http://sparetime.project:8000/api/events', {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.chartdata = response.data.data
          this.loaded = true
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
};
</script>

<style>

</style>
