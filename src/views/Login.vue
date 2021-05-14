<template>
<v-container>
<v-row class="my-16" align="center"
justify="center">

 <v-col md="4">

<v-card >
<v-card-title class="headline grey lighten-2" primary-title>
<v-icon class="pr-1">mdi-login-variant</v-icon> 
Login
</v-card-title>
<v-card-text>
<v-form>
<v-text-field v-model="form.email" label="Email" :rules="emailRules" required></v-text-field>
<v-text-field v-model="form.password" label="Password" type="password" :rules="passwordRules" required></v-text-field>
<v-btn @click="login()" @keyup.enter="login()" elevation="2" large color="primary">LOGIN</v-btn>
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
name: 'Login',
components: {

 },
data() {
	return {
		form: {
				email: "",
				password: ""
	},
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
	login() {
	axios.post('http://sparetime.project:8000/api/login', {
email: this.form.email,
password: this.form.password
})
.then(response => {
console.log(response.data);
localStorage.setItem('token', response.data.token);
this.$emit('login');
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

</style>