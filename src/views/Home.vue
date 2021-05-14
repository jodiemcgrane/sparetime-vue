<!--
@Date:   2021-02-18T16:18:41+00:00
@Last modified time: 2021-02-23T09:16:21+00:00
-->
<template>
<div >
  <v-container>
        <FullCalendar />
  </v-container>
</div>
</template>

<script>
import FullCalendar from "../components/FullCalendar"

export default {
  name: 'home',
  components: {
    FullCalendar,
  
  }
}
</script>

<style>
.home {
  text-align: center;
}
</style>
