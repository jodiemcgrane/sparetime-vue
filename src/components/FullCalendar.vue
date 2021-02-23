<!--
@Date:   2021-02-23T09:10:09+00:00
@Last modified time: 2021-02-23T13:27:21+00:00
-->
<template>
<div>
  <Fullcalendar :options="calendarPlugins" :events="getEvents()" />
</div>
</template>

<script>
import Fullcalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

import axios from 'axios';
export default {
  components: {
    Fullcalendar
  },
  data() {
    return {
      calendarPlugins: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          listPlugin
        ],
        headerToolbar: {
          left: 'prev,today,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        buttonText: {
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day'
        },
        selectable: true,
        initialView: 'timeGridWeek',
        slotMinTime: '07:00:00',

        events: []
      },
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
          this.calendarPlugins.events = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
}
</script>

<style>
.fc .fc-col-header-cell-cushion {
  background-color: #000;
  color: #fff;
}

.fc .fc-prev-button {
  background-color: #2196F3;
  color: #fff;
  border-color: #2196F3;
}

.fc .fc-prev-button:hover {
  background-color: #2196F3;
  color: #fff;
  border-color: #2196F3;
}

.fc-button {
  background-color: #2196F3;
  color: #fff;
}

.fc-button-primary {
  background-color: #2196F3;
  color: #fff;
}
</style>
