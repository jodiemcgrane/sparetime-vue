<!--
@Date:   2021-02-11T14:34:16+00:00
@Last modified time: 2021-02-22T11:50:31+00:00
-->
<template>
<nav>

  <v-app-bar app dense color="blue">
    <v-app-bar-nav-icon class="white--text" @click="sideBar = !sideBar"></v-app-bar-nav-icon>
    <v-toolbar-title class="white--text">SpareTime</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn depressed class="blue text-uppercase white--text" to="/Projects">Login</v-btn>
      <v-icon class="white--text">mdi-login-variant</v-icon>
    </v-toolbar-items>
  </v-app-bar>

  <v-navigation-drawer app temporary v-model="sideBar">
    <v-list>
      <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
        <v-list-item-icon>
          <v-icon class="black--text">{{link.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ link.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      sideBar: false,
      links: [{
          icon: 'mdi-home-variant',
          title: 'Home',
          route: '/'
        },
        {
          icon: 'mdi-calendar-check',
          title: 'Events',
          route: '/events'
        },
        {
          icon: 'mdi-finance',
          title: 'Productivity',
          route: '/productivity'
        }
      ]
    }
  },
  components: {

  },
}
</script>

<style>

</style>
