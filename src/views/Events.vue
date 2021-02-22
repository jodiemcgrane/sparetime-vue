<!--
@Date:   2021-02-22T10:58:01+00:00
@Last modified time: 2021-02-22T13:11:39+00:00
-->
<template lang="html">
<v-container>
  <v-row>
    <v-col v-for="event in events" :key="event.id" cols="12" md="4">
      <v-card>
        <v-card-title>
          <h1 class="black--text">Title: {{ event.title }}</h1>
        </v-card-title>

        <v-card-text>
          <p class="black--text">Event ID: {{ event.id }}</p>
          <br>
          <p class="black--text">Start: {{ event.start }}</p>
          <br>
          <p class="black--text">End: {{ event.end }}</p>
          <v-divider/>
          <!-- <p class="black--text">{{ event.todos }}</p> -->
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Events',

  components: {

  },
  data() {
    return {
      events: [],
    }
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    getEvents() {
      axios.get('http://sparetime.project:8000/api/events')
        .then(response => {
          console.log(response.data);
          this.events = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
}
</script>

<style lang="css" scoped>
</style>
