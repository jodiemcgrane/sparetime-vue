<!--
@Date:   2021-02-18T16:01:45+00:00
@Last modified time: 2021-02-22T10:51:43+00:00
-->



<template>
<div>
  <NavBar />
  <router-view />
</div>
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
