<!--
@Date:   2021-02-23T09:10:09+00:00
@Last modified time: 2021-02-25T18:46:20+00:00
-->
<template>
  <div>

  <Popup v-on:get-events="getEvents" class="mt-5 ml-auto right"/>
  <Fullcalendar :options="calendarPlugins" :events="getEvents()" class="mt-5" />


</div>
</template>

<script>
import Fullcalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

import axios from 'axios';
import Popup from '@/components/Popup.vue';
export default {
  components: {
    Fullcalendar,
    Popup
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

        events: [],
      },
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
/* .fc .fc-col-header-cell-cushion {
  background-color: #000;
  color: #fff;
} */

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
.right{
  text-align: right;
}
</style>
