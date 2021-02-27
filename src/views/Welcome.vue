
<template>

  <v-container>
<v-row align="center"
      justify="center">

      <v-col md="4">


<v-card >
  <v-card-title class="headline grey lighten-2" primary-title>
    <v-icon>mdi-login-variant</v-icon>
  </v-card-title>
  <v-card-text>
    <v-form>
       <v-text-field v-model="form.email" label="Email" required></v-text-field>
        <v-text-field v-model="form.password" label="Password" required></v-text-field>
        <v-btn @click="login()" elevation="2" large color="primary">LOGIN</v-btn>
        </v-form>
      </v-card-text>
</v-card>
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
</style>
