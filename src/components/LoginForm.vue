<template>
    <div class="contents">
        <div class="form-wrapper form-wrapper-sm">
            <form @submit.prevent="submitForm" class="form">
                <div>
                    <label for="username">id: </label>
                    <input id="username" type="text" v-model="username" />
                    <p class="validation-text">
                        <span class="warning" v-if="!isUserNameValid">
                        Please enter an email address
                        </span>
                    </p>
                </div>
                <div>
                    <label for="password">pw: </label>
                    <input id="password" type="text" v-model="password" />
                </div>
                <button type="submit" class="btn"
                    :disabled="!isUserNameValid || !password">로그인</button>
                <p class="log">{{ logMessage}}</p>
            </form>
        </div>
    </div>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			username: '',
			password: '',
            logMessage: '',
		};
	},
    computed: {
        isUserNameValid() {
            if (!this.username) return false;
            return validateEmail(this.username);
        },
    },
	methods: {
		async submitForm() {
            try {
                const userData = {
                    username: this.username,
                    password: this.password,
                };
                const { data } = await loginUser(userData);
                this.logMessage = `${data.user.username} 님 환영합니다.`;

                // mutation 호출
                this.$store.commit('setToken', data.token);
                this.$store.commit('setUsername', data.user.username);

                // 페이지 이동
                this.$router.push('/main');
            } catch (error) {
                this.logMessage = error.response.data;
            } finally {
                this.initForm();
            }
		},
        initForm() {
            this.username = '';
            this.password = '';
        }
	},
};
</script>

<style></style>
