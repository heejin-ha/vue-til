<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<button type="submit">회원 가입</button>
        <p>{{ logMessage}}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/index';

export default {
	data() {
		return {
			username: '',
			password: '',
            logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
			};
			const { data } = await loginUser(userData);
			console.log(data);
            this.logMessage = `${data.user.username} 님 환영합니다.`;
		},
	},
};
</script>

<style></style>
