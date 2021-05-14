
<template>
  <v-container>
 <v-row class="mt-16 clock-img">
 <v-col cols="5" >   
<h1 class="display-4 font-weight-bold">Welcome</h1>
<h2 class="display-3 font-weight-bold pl-2">to SpareTime</h2>
<p class="display-1 pt-6">SpareTime is the free calendar-based time management application available in your web-browser.</p>
<v-btn x-large color="blue" class=" font-weight-bold white--text" to="register">Register Now!</v-btn>


</v-col>
<!-- <v-col>
  <h1>Content</h1>
</v-col> -->
</v-row>
<v-row class="mt-16">
    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-row class="fill-height" align="center" justify="center">
        <div class="mr-auto mt-auto pl-10">
        <p class="display-3 font-weight-bold white--text">{{ slideText[i] }}</p></div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
  </v-row>
  <v-row class="mt-16">
    <v-col cols="4" class="d-flex align-stretch">
      <v-card class="">
        <v-card-title>
           <h2 class="font-weight-bold">Calender</h2>
         </v-card-title>
           <v-img
   height="300"
      src="/calendar.png"
    ></v-img>
        <v-card-text>
     
        <p>With SpareTime planning ahead is easy. SpareTimes built in calendar allows you to view events on a daily, weekly or monthly basis. Worried you'll forget about that test at the end of the month? Don't worry our calendar has a monthly view for that! Need to plan something for today at 5 o'clock? Choose our daily view. Planning on that holiday later this year? Our calendar has got you cover. </p>
      </v-card-text>
          </v-card>
    </v-col>


    <v-col cols="4" class="d-flex align-stretch">
       <v-card >
        <v-card-title>
           <h2 class="font-weight-bold">To-do</h2>
         </v-card-title>
           <v-img
           height="300"
      src="/todo.png"
    ></v-img>
        <v-card-text>
     
        <p>Don't know where to start when it comes to studying for your maths exam? Have you got groceries you need to pick up? Maybe you want to get ahead of the class on that project? SpareTime has excellent To-do list feature. Create lists for your math exam prep! Maybe you should start with some revision of chapters one and two</p>
      </v-card-text>
          </v-card>
    </v-col>
     <v-col cols="4" class="d-flex align-stretch">
 <v-card >
        <v-card-title>
           <h2 class="font-weight-bold">Status</h2>
         </v-card-title>
           <v-img
            height="300"
            src="/status.png"
          ></v-img>
        <v-card-text>
     
        <p>It can be hard to juggle projects. Having multiple projects going on a the one time can be confusing. Sparetimes status feature will allow you to distinguish between project that are currently ongoing and projects that are done! Whenever an event is complete you can simply mark it as done!</p>
      </v-card-text>
          </v-card>
    </v-col>
  </v-row>
  <v-row class="mt-16 mb-16">
    <v-col cols="5">
      <h1 class="display-4 font-weight-bold">Try it out!</h1>
   </v-col>
    <v-col cols="5" class="">
    <h1 class="display-1 pt-16">SpareTime could be the scheduler for you.</h1>
      
<v-btn x-large color="blue" class=" font-weight-bold white--text mt-10" to="register">Register Now!</v-btn>
    </v-col>
 
  </v-row>
  </v-container>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Welcome',
  components: {

  },

  
  data() {
    return {

      slideText:[
      "Optimization",
      
      "Organization"
      ,
      "Management"
      ],
      items: [
        {
            src: '/slide01.jpg',
          },
          {
            src: '/slide02.jpg',
          },
          {
            src: '/slide03.jpg',
          }
      ],
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      axios.post('http://sparetime.project:8000/api/login', {
        email: this.form.email,
        password: this.form.password
      })
      .then(response => {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        this.$router.replace({
          name: 'home'
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
.home{
  text-align: center;

}
.text-shadow{
text-shadow: 4px 4px 2px rgba(169, 169, 169, 0.5);
}
.clock-img {
  height: 500px;
  background-image: url('/clock.png');
  background-size: 100%;
}
</style>
