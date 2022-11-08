import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '*', // 정해진 path 이외의 페이지 라우팅, https://router.vuejs.org/guide/essentials/history-mode.html#html5-mode
			component: () => import('@/views/PageNotFound.vue'),
		},
	],
});
