<!--
@Date:   2021-03-04T13:52:11+00:00
@Last modified time: 2021-03-04T13:56:30+00:00
-->
<template>
<v-container>
  <v-row align="center mt-16" justify="center">
    <v-col md="4">

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          <v-icon class="pr-1">mdi-account-plus</v-icon>
          Register
          
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="form.name" label="Name" :rules="nameRules" required></v-text-field>
            <v-text-field v-model="form.email" label="Email" :rules="emailRules" required></v-text-field>
            <v-text-field v-model="form.password" label="Password" :rules="passwordRules" required></v-text-field>
            <v-btn @click="register()" elevation="2" large color="primary">REGISTER</v-btn>
          </v-form>
        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
</v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',

  components: {

  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      nameRules:[
      v=> !!v || "Name is empty"
      ],
      emailRules:[
      v=> !!v || "Email is empty",
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules:[
      v=> !!v || "Password is empty"
      ] 
    }
  },
  methods: {
    register() {
      axios.post('http://sparetime.project:8000/api/register', {
          name: this.form.name,
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

<style>
.contents {
  width: 50%;
}

.form-block {
  background: #fff;
  padding: 60px;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 10%);
}
</style>
