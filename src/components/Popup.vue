<template lang="html">

  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn depressed
         class="blue text-uppercase white--text" v-on="on"><v-icon>mdi-calendar-plus</v-icon>Event</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add a New Project</v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field v-model="title" required label="Title" prepend-icon="mdi-folder"></v-text-field>
                <v-menu
                v-model="menu_date"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                    v-model="date"
                    label="Enter the date of your event"
                    prepend-icon="mdi-calendar"
                    readonly
                      v-bind="attrs"
                      v-on="on"
                                >
                              </v-text-field>
                            </template>
                              <v-date-picker
                              v-model="date"
                              @input="menu_date = false"
                              ></v-date-picker>

            </v-menu>
            <v-menu

                    v-model="start_time"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="time"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="time"
                        label="Event start time"
                        prepend-icon="mdi-alarm"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
            <v-time-picker
     v-model="start_time"
     :allowed-hours="allowedHours"
     :allowed-minutes="allowedMinutes"
     class="mt-4"
     format="24hr"
     scrollable

   ></v-time-picker>
 </v-menu>
 <v-menu
         ref="menu"
         v-model="menu2"
         :close-on-content-click="false"
         :nudge-right="40"
         :return-value.sync="time"
         transition="scale-transition"
         offset-y
         max-width="290px"
         min-width="290px"
       >
         <template v-slot:activator="{ on, attrs }">
           <v-text-field
             v-model="time"
             label="Event start time"
             prepend-icon="mdi-alarm"
             readonly
             v-bind="attrs"
             v-on="on"
           ></v-text-field>
         </template>
 <v-time-picker
v-model="end_time"
:allowed-hours="allowedHours"
:allowed-minutes="allowedMinutes"
class="mt-4"
format="24hr"
scrollable

></v-time-picker>
</v-menu>
            <v-btn dpressed class="success mx-0 mt-3">Add Event</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
   return {
     dialog: false,
     form: {
       title:"",
       date:"",
       start_time:"",
       end_time:""
     },
      menu_date: false
   }
 }
}
</script>

<style lang="css" scoped>
</style>
