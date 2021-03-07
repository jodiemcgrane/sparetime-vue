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
    {{DisplayEvent.title}}
      </v-card-title>
            <v-card-text>
          Information:  {{$route.params.id}}
          <br>
          {{DisplayEvent.date}}
          <br>
          {{DisplayEvent.start_time}}
          <br>
          {{DisplayEvent.end_time}}
            </v-card-text>
            <UpdatePopup :eventData="DisplayEvent"/>
            <v-btn depressed
            @click="removeEvent()"
            class="error text-uppercase white--text" >REMOVE</v-btn>
  </v-card>
</v-col>

<v-col cols="4">
  <v-card>
      <v-card-text>
<TodoList :eventDataTodos="DisplayEvent" />
</v-card-text>
</v-card>
</v-col>
</v-row>


<v-row>
<v-col>
    <v-card v-for="todo in DisplayEvent.todos" :key="todo.id">
      <v-card-text>
        {{todo.title}}

    </v-card-text>
    </v-card>
  </v-col>
</v-row>


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
      DisplayEvent: {
        id: '',
        title: '',
        date: '',
        start_time: '',
        end_time: '',
        todos: []

      },
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
          this.DisplayEvent = response.data.data
          this.DisplayEvent = {
            id: this.DisplayEvent.id,
            title: this.DisplayEvent.title,
            date: moment(this.DisplayEvent.start).format('DD-MM-YYYY'),
            start_time: moment(this.DisplayEvent.start).format('h:mm'),
            end_time: moment(this.DisplayEvent.end).format('h:mm'),
            todos: this.DisplayEvent.todos

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
    }
  },
}
</script>

<style lang="css" scoped>
</style>
