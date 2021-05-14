<!--
@Date:   2021-02-18T16:01:45+00:00
@Last modified time: 2021-02-22T11:41:46+00:00
-->
<template>
<v-app >
  <NavBar :loggedIn="this.loggedIn" v-on:login="setLoggedIn" v-on:logout="setLoggedOut" />
  <v-main class="background">
    <router-view :loggedIn="this.loggedIn" v-on:login="setLoggedIn" v-on:logout="setLoggedOut" />
  </v-main>
</v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      loggedIn: false
    }
  },
  created() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
      console.log("APP: ",this.loggedIn);
    }
    else {
      this.loggedIn = false;
    }
  },
  methods: {
    setLoggedIn() {
      this.loggedIn = true;
            // optionally, you could store the token in localStorage here
    },
    setLoggedOut() {
      this.loggedIn = false;
            // optionally, you could trigger the whole logout process here
    }
  }

}
</script>

<style>
.background{
  background-color: #F5F5F5;
}
a.router-link-active, a.router-link:hover {

text-decoration: none;
} 
</style>
