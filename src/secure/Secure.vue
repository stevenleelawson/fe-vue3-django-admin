<template>
	<Nav></Nav>
	<div class="container-fluid">
		<div class="row">
			<Menu></Menu>
      
			<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
				<router-view />
			</main>
		</div>
	</div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Nav from '@/components/Nav.vue';
import { onMounted } from 'vue';
import axios from 'axios';

export default {
	name: "Secure",
	components: {
		Menu,
		Nav,
	},
	setup () {
		onMounted(async () => {
			const res = await axios.get('http://localhost:8000/api/users');
			console.log('rezz', res)
		})

		return {}
	}
}
</script>

<style lang="css" scoped>
/* html,
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
} */
</style>