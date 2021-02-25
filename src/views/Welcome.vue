<!--
@Date:   2021-02-25T17:54:36+00:00
@Last modified time: 2021-02-25T18:25:01+00:00
-->
<template>
<v-form>
  <v-container>
    <v-row>

      <v-col cols="12" md="4">
        <v-text-field v-model="form.email" label="Email" required></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field v-model="form.password" label="Password" required></v-text-field>
      </v-col>

    </v-row>

    <v-btn @click="login()" elevation="2" large color="primary">LOGIN</v-btn>

  </v-container>
</v-form>
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
</style>
