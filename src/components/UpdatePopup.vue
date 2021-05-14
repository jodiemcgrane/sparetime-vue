<!--
@Date:   2021-02-24T12:51:59+00:00
@Last modified time: 2021-05-11T11:36:40+01:00
-->
<template lang="html">

  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn depressed
         class="amber darken-1 text-uppercase white--text" v-on="on"><v-icon>mdi-calendar-plus</v-icon>Update</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Edit Event</v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field v-model="eventData.title" required label="Title" prepend-icon="mdi-folder"></v-text-field>
                <v-menu
                v-model="menu_date"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                    v-model="eventData.date"
                    label="Enter the date of your event"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                                >
                    </v-text-field>
                  </template>
                              <v-date-picker
                              v-model="eventData.date"
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

              <v-text-field v-model="eventData.start_time"
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
          v-model="eventData.start_time"
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

            <v-text-field v-model="eventData.end_time"
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
        v-model="eventData.end_time"
        format="24hr"
        full-width
        >
        </v-time-picker>

        </v-menu>
        <v-row >
          <v-col class="d-flex justify-center">
            <v-radio-group row v-model="eventData.status">
            <v-chip color="success">
            <v-radio color="white" value="done">
                </v-radio>
                Done
              </v-chip>
              <v-chip color="warning">
                <v-radio color="white" value="ongoing">
              </v-radio>
              Ongoing
            </v-chip>
            </v-radio-group>
                  </v-col>

                    </v-row>
                        <v-row class="d-flex justify-center">
                            <v-btn @click="updateEvent(); dialog=false" depressed class="d-flex justify-center success mx-0 mt-3">Submit</v-btn>
                        </v-row>
                      </v-form>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
</template>

<script>
import axios from 'axios';
//import moment from 'moment';
export default {
  name: 'UpdatePopup',
  props: {
    eventData: {
      type: Object,
      required: true
    }
  },
  data() {

    return {

      //     eventFormData: {
      //       title: this.eventData.title,
      //       date: moment(this.eventData.start).format("DD/MM/YYYY"),
      //       start_time: moment(this.eventData.start).format("HH:mm"),
      //       end_time: moment(this.eventData.end).format("HH:mm")
      // },

      dialog: false,
      menu_date: false,
      menu_start_time: false,
      menu_end_time: false

    }
  },

  mounted() {

  },
  methods: {
    updateEvent() {
      let token = localStorage.getItem('token');
      axios.put(`http://sparetime.project:8000/api/events/${this.eventData.id}`, {
          title: this.eventData.title,
          start_date: this.eventData.date,
          start_time: this.eventData.start_time,
          end_time: this.eventData.end_time,
          status: this.eventData.status
        }, {
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
          console.log(error.response.data)
        })
    }


  },
}
</script>

<style lang="css" scoped>
</style>
