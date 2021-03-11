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
    {{formData.title}}
      </v-card-title>
            <v-card-text>
          Information:  {{$route.params.id}}

          <br>
          {{formData.start_time}}
          <br>
          {{formData.end_time}}
          <br>
          {{formData.date}}
            </v-card-text>
            <UpdatePopup :eventData="formData"/>
            <v-btn depressed
            @click="removeEvent()"
            class="error text-uppercase white--text" >REMOVE</v-btn>
  </v-card>
</v-col>

<v-col cols="4">
  <v-card>
      <v-card-text>
<TodoList :eventDataTodos="formData" :event_id="id" />
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
    // removeEvent() {
    //   let token = localStorage.getItem('token');
    //   axios.delete(`http://sparetime.project:8000/api/events/${this.id}`, {
    //       headers: {
    //         Authorization: "Bearer " + token
    //       }
    //     })
    //     .then(response => {
    //       console.log(response.data);
    //       this.$router.replace({
    //         name: 'events'
    //       });
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // }
  },
}
</script>

<style lang="css" scoped>
</style>
