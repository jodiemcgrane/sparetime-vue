<!--
@Date:   2021-02-24T12:51:59+00:00
@Last modified time: 2021-05-11T13:24:14+01:00
-->
<template lang="html">

  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        
        <v-btn depressed
         class="success text-uppercase white--text" v-on="on"><v-icon>mdi-calendar-plus</v-icon>Event</v-btn>
       
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add a new event</v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field v-model="form.title" :rules="titleRules" required label="Title" prepend-icon="mdi-folder"></v-text-field>
                <v-menu
                v-model="menu_date"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                    v-model="form.date"
                    label="Enter the date of your event"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  
                                >
                    </v-text-field>
                  </template>
                              <v-date-picker
                              v-model="form.date"
                              @input="menu_date = false"
                            
                              >
                            </v-date-picker>

            </v-menu>
            <v-menu
            v-model="menu_start_time"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="menu_start_time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
            >
            <template v-slot:activator="{ on, attrs}">
              <v-text-field v-model="form.start_time"
              label="Pick a time"
              prepend-icon="mdi-alarm"
              readonly
              v-bind="attrs"
              v-on="on"
              
              >
            </v-text-field>
          </template>
          <v-time-picker
          v-if="menu_start_time"
          v-model="form.start_time"
          format="24hr"
          full-width

          >
          </v-time-picker>
          </v-menu>

          <v-menu
          v-model="menu_end_time"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="menu_end_time"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
          >
          <template v-slot:activator="{ on, attrs}">
            <v-text-field v-model="form.end_time"
            label="Pick a time"
            prepend-icon="mdi-alarm"
            readonly
            v-bind="attrs"
            v-on="on"
            >
          </v-text-field>
        </template>
        <v-time-picker
        v-if="menu_end_time"
        v-model="form.end_time"
        format="24hr"
        full-width
        >
        </v-time-picker>
        </v-menu>

            <v-btn @click="createEvent(); dialog=false;" depressed class="success mx-0 mt-3">Add Event</v-btn>

          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Popup',
  data() {
    return {
      dialog: false,
      form: {
        title: "",
        date: "",
        start_time: "",
        end_time: ""
      },
      menu_date: false,
      menu_start_time: false,
      menu_end_time: false,

      titleRules: [
      v => !!v || "Title is empty"
      ]
    

    }
  },
  methods: {
    createEvent() {
      if(this.$refs.form.validate()){
      let token = localStorage.getItem('token');
      axios.post('http://sparetime.project:8000/api/events', {

          title: this.form.title,
          start_date: this.form.date,
          start_time: this.form.start_time,
          end_time: this.form.end_time
        }, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.$emit("get-events");
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
        })
    }
  },
    getEvents(){
      this.$emit("get-events");
    }

  },
}
</script>

<style lang="css" scoped>
</style>
