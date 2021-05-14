<!--
@Date:   2021-02-11T14:34:16+00:00
@Last modified time: 2021-03-04T14:08:25+00:00
-->
<template>
<nav>

  <v-app-bar app color="blue">
    <v-app-bar-nav-icon class="white--text" @click="sideBar = !sideBar" v-if="loggedIn"></v-app-bar-nav-icon>
    <v-toolbar-title class="white--text">SpareTime</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="align-center" v-if="loggedIn">

        <v-btn @click="logout()" depressed class="blue text-uppercase white--text" to="/">Logout<v-icon>mdi-logout</v-icon></v-btn>

    </v-toolbar-items>
     <v-toolbar-items class="align-center" v-else>
      <v-btn depressed class="blue text-uppercase white--text" to="/login">Login<v-icon>mdi-login-variant</v-icon></v-btn>
      <v-btn depressed class="blue text-uppercase white--text" to="/register">Register<v-icon>mdi-account-plus</v-icon></v-btn>
    </v-toolbar-items>

     

    
  </v-app-bar>

  <v-navigation-drawer app v-model="sideBar" v-if="loggedIn">
    <v-list>
      <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
        <v-list-item-icon>
          <v-icon class="black--text">{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</nav>
</template>

<script>
import axios from 'axios';
//import Popup from './Popup.vue'

export default {
  name: 'NavBar',
  props: {
  loggedIn: Boolean //<-- this is new line
},
  data() {
    return {
      sideBar: false,
      links: [{
          icon: 'mdi-home-variant',
          title: 'Home',
          route: '/home'
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
    //Popup
  },
  methods: {
    logout() {
      let token = localStorage.getItem('token')

      axios.get('http://sparetime.project:8000/api/logout', {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.$router.replace({
            name: 'welcome'
          });
          this.$emit('logout');
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
        })
      localStorage.removeItem('token');
    }
  },
}
</script>

<style>
.popup-mt {
  margin-top: 14px;
}
</style>
