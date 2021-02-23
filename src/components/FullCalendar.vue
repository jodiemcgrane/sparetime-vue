<!--
@Date:   2021-02-23T09:10:09+00:00
@Last modified time: 2021-02-23T09:15:46+00:00
-->
<template>
  <div>
    <Fullcalendar
    :options="calendarPlugins"
    />
  </div>
</template>

<script>

import Fullcalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

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
          initialView: 'dayGridMonth',
        }
      }
    }
  }
</script>

<style>

</style>
