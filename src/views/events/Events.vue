<!--
@Date:   2021-02-22T10:58:01+00:00
@Last modified time: 2021-03-06T20:48:41+00:00
-->
<template lang="html">
<v-container class="my-5">


<v-card flat tile class="px-2"

v-for="event in displayEvents" :key="event.id">
<v-row row wrap >
  <v-col cols="12" md="6" class="pl-2 border-left">
    <div class="caption grey--text">
      Event Title
    </div>
    <div>
      {{event.title}}
    </div>
  </v-col>
  <v-col xs="2">
    <div class="caption grey--text">
      Start Time
    </div>
    <div>
      {{event.start}}
    </div>
  </v-col>
  <v-col xs="2">
    <div class="caption grey--text">
      End Time
    </div>
    <div>
      {{event.end}}
    </div>
  </v-col>
  <v-col xs="2">
    <div class="caption grey--text">
      Date
    </div>
    <div>
      {{event.date}}
    </div>

  </v-col>
  <v-col xs="2">

    <div>
    <v-btn  depressed color="primary text-xs-center"

    :to="{name: 'events_show', params: { id: event.id} }">View</v-btn>
    </div>

  </v-col>

</v-row>
<v-divider />
</v-card>

</v-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'Events',

  components: {

  },
  data() {
    return {
      events: [],
      DisplayEvent:{
        id:'',
        title: '',
        date:'',
        start_time:'',
        end_time:''
      },
      displayEvents: []
    }

  },
  mounted() {
    this.getEvents();
  },
  methods: {
    getEvents() {
      let token = localStorage.getItem('token');

      axios.get('http://sparetime.project:8000/api/events', {
        headers: { Authorization: "Bearer " + token }
      })
        .then(response => {
          console.log(response.data);
          this.events = response.data.data
          this.events.forEach(event => {
            this.displayEvents.push(
              {
              id: event.id,
              title: event.title,
              date: moment(event.start).format('DD-MM-YYYY'),
              start: moment(event.start).format('h:mm'),
              end: moment(event.end).format('h:mm')
            }
          )
        })
          })
        .catch(error => {
          console.log(error)
        })
    }
  },

}
</script>

<style>
.border-left {
  background-color: #ffffff !important;
  border-left: 5px solid #2196f3 !important
}


</style>
