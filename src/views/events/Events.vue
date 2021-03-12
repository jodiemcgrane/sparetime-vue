<!--
@Date:   2021-02-22T10:58:01+00:00
@Last modified time: 2021-03-08T18:25:12+00:00
-->
<template lang="html">
<v-container class="my-5">


<v-card
  flat tile class="px-2"
  v-for="event in events"
  :key="event.id"
  >

<v-row row wrap :class="`event ${event.status}`" >

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

      {{event.start | moment("HH:mm")}}
    </div>
  </v-col>

  <v-col xs="2">
    <div class="caption grey--text">
      End Time
    </div>
    <div>
      {{event.end | moment("HH:mm")}}
    </div>
  </v-col>

  <v-col xs="2">
    <div class="caption grey--text">
      Date
    </div>
    <div>
      {{event.start | moment("DD/MM/YYYY")}}
    </div>
  </v-col>

  <v-col xs="2">
    <div class="caption grey--text">
      Status
    </div>

    <div>
      <v-chip small :class="`${event.status} white--text caption my-2`">{{ event.status }}</v-chip>
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
      let token = localStorage.getItem('token');

      axios.get('http://sparetime.project:8000/api/events', {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.events = response.data.data;


        })
        .catch(error => {
          console.log(error)
        })
    }
  }

}
</script>

<style>
/* .border-left {
  background-color: #ffffff !important;
  border-left: 5px solid #2196f3 !important
} */
.event.done {
  border-left: 4px solid #4caf50;
}

.event.ongoing {
  border-left: 4px solid orange;
}

.event.overdue {
  border-left: 4px solid tomato;
}

.v-chip.done {
  background: #4caf50 !important;
}

.v-chip.ongoing {
  background: #ffaa2c !important;
}

.v-chip.overdue {
  background: #f83e70 !important;
}
</style>
