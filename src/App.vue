<!--
@Date:   2021-02-18T16:01:45+00:00
@Last modified time: 2021-02-22T11:41:46+00:00
-->
<template>
<v-app>
  <NavBar />
  <v-main>
    <router-view />
  </v-main>
</v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>

</style>
