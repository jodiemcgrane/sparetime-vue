<!--
@Date:   2021-03-05T21:28:59+00:00
@Last modified time: 2021-03-06T22:01:12+00:00
-->
<template lang="html">
<v-container class="my-5">
<v-row>
  <v-col cols="6">
  <v-card>

      <v-card-title>
    <h2 class="font-weight-bold">{{formData.title}}</h2>
      </v-card-title>
            <v-card-text>
          Event Id:  {{$route.params.id}}
          <v-row>
          <v-col xs="2">
              <h5 class="black--text font-weight-bold">Start Time:</h5>
            </v-col>
      
            <v-col xs="2">
              <p class="body-1">{{formData.start_time}}</p>
            </v-col>
            </v-row>
            <v-row>
          <v-col xs="2">
              <h5 class="black--text font-weight-bold">End Time:</h5>
            </v-col>
            <v-col xs="2">
              <p class="body-1">{{formData.end_time}}</p>
          </v-col>

        </v-row>
          <v-row>
            <v-col xs="2">
                <h5 class="black--text font-weight-bold">Date:</h5>
              </v-col>
              <v-col xs="2">
                <p class="body-1">{{formData.date}}</p>
            </v-col>

          </v-row>
            </v-card-text>
            <v-row>
                <v-col xs="2">
            <UpdatePopup :eventData="formData"/>
          </v-col>
          <v-col xs="2">
            <v-btn depressed
            @click="removeEvent()"
            class="error text-uppercase white--text" >REMOVE</v-btn>
          </v-col>
          </v-row>

  </v-card>
</v-col>

<v-col cols="4">
  <v-card>
      <v-card-text>
<TodoList  />
</v-card-text>
</v-card>
</v-col>
</v-row>


<!-- <v-row>
<v-col>
    <v-card v-for="todo in event.todos" :key="todo.id">
      <v-card-text>
        {{todo.title}}

    </v-card-text>
    </v-card>
  </v-col>
</v-row> -->


</v-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

import UpdatePopup from '@/components/UpdatePopup.vue'
import TodoList from "@/components/Todo/TodoList"
export default {

  components: {
    TodoList,
    UpdatePopup,
  },
  data() {
    return {
      //event: {},

       formData: {},
      //   title: this.event.title,
      //   date: moment(this.event.start).format("YYYY-MM-DD"),
      //   start_time: moment(this.event.start).format("HH:mm"),
      //   end_time: moment(this.event.end).format("HH:mm")
      // },

    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.getEvent();
  },
  methods: {
    getEvent() {
      let token = localStorage.getItem('token');
      axios.get(`http://sparetime.project:8000/api/events/${this.id}`, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          //this.event = response.data.data;
          this.formData = {
            id: response.data.data.id,
            title: response.data.data.title,
            date: moment(response.data.data.start).format("YYYY-MM-DD"),
            start_time: moment(response.data.data.start).format("HH:mm:ss"),
            end_time: moment(response.data.data.end).format("HH:mm:ss"),
            todos: response.data.data.todos
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    removeEvent() {
      let token = localStorage.getItem('token');
      axios.delete(`http://sparetime.project:8000/api/events/${this.id}`, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.$router.replace({
            name: 'events'
          });
        })
        .catch(error => {
          console.log(error)
        })

  },
}
}
</script>

<style lang="css" scoped>
</style>
