<template>
	<form class="form-signin" @submit.prevent="submit">
		<h1 class="h3 mb-3 font-weight-normal">Please register</h1>
		
		<label for="first_name" class="sr-only">First Name</label>
		<input
			type="text"
			id="first_name"
			class="form-control"
			placeholder="First Name"
			required
			v-model="firstName"
		/>

		<label for="last_name" class="sr-only">Last Name</label>
		<input
			type="text"
			id="last_name"
			class="form-control"
			placeholder="Last Name"
			required
			v-model="lastName"
		/>

		<label for="inputEmail" class="sr-only">Email address</label>
		<input
			type="email"
			id="inputEmail"
			class="form-control"
			placeholder="Email address"
			required
			autofocus
			v-model="email"
		/>

		<label for="inputPassword" class="sr-only">Password</label>
		<input
			type="password"
			id="inputPassword"
			class="form-control"
			placeholder="Password"
			required
			v-model="password"
		/>

		<label for="password_confirm" class="sr-only">Password Confirm</label>
		<input
			type="password"
			id="password_confirm"
			class="form-control"
			placeholder="Password Confirm"
			required
			v-model="passwordConfirm"
		/>
		
		<button class="btn btn-lg btn-primary btn-block" type="submit">
			Register
		</button>
		<p class="mt-5 mb-3 text-muted">&copy; 2025 a Lawson Lee Joint</p>
	</form>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
	name: "Register",
	setup() {
		const firstName = ref('');
		const lastName = ref('');
		const email = ref('');
		const password = ref('');
		const passwordConfirm = ref('');
		// for to use on redirect on FE after register
		const router = useRouter();
		const submit = async () => {

			const baseUrl = 'http://localhost:8000/api/register';
			
			const payload = {
					first_name: firstName.value,
					last_name: lastName.value,
					email: email.value,
					password: firstName.value,
					password_confirm: firstName.value,
				}
				const res = axios.post(baseUrl, payload)
				console.log('res',res.data)
				
				await router.push('/login')

						// FOR-GET HOMIE!!!!!
						
			// const baseUrlGet = 'http://localhost:8000/api/users';

			// axios.get(baseUrlGet).then(
			// 	res => {
			// 		console.log('rezzzz', res)
			// 	}
			// )

		}

		return {
			firstName,
			lastName,
			email,
			password,
			passwordConfirm,
			submit
		}
	},
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
