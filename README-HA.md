## 개발환경
### 깃헙 리포지토리
https://github.com/joshua1988/vue-til

### Vue TIL 애플리케이션 Node.js 서버 코드
https://github.com/joshua1988/vue-til-server.git


### db mongodb cloud
 - https://cloud.mongodb.com/v2/6360f5348af33d10aa12f43e#clusters?fastPoll=true
 - 계정 정보 : vue / vue
 - 접속 정보 : mongodb+srv://vue:<password>@cluster0.d5ueaes.mongodb.net/?retryWrites=true&w=majority


### vue installation
- https://cli.vuejs.org/guide/installation.html

### change node version
 - nvm 설치 - vue-til-server > README.md 확인
 - nvm use 노드 버전
   - 터미널 단위로 설정하면 됨

### prettier
- https://prettier.io
- https://prettier.io/docs/en/options.html
- .eslintrc.js 파일 내 rules > prettier/prettier 로 정의
- https://joshua1988.github.io/web-development/vuejs/boost-productivity/


### 파일 절대 경로 설정
 - 특정 위치 기준으로 절대 경로 설정
 - jsconfig.json 파일 생성하여 vs-code 내 설정파일
 - `"@/*": ["./src/*"]` 설정으로 절대 경로 설정 가능
 - exclude: 제외될 파일


### 코딩 컨벤션
 - https://v2.vuejs.org/v2/style-guide/

### lazy loading


### router
 - 기존 router 방식
 ```html
    <div id="app">
		<header>
			<router-link to="/login">로그인</router-link> |
			<router-link to="/signup">회원가입</router-link>
		</header>
		<router-view></router-view>
	</div>
```
 - 코드 스플리팅 방식 적용
    -  `component: () => import()` 형태로 사용
    - 페이지 이동시에 필요한 js 파일 가져오는 코드 형식으로 속도가 개선 효과 있음
    - SPA 시스템에서 사용 권장 -> 초기 로딩 속도 빨라지고 사용자 경혐 높아짐
    - https://webpack.js.org/guides/code-splitting/

 ```javascript
 routes: [
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
]
 ```


### axios 관련
 - https://github.com/axios/axios#axioscreateconfig

### 실행방식
 -  1_signup branch
    - `npm i`
    - `npm install vue-router@3.5.3`



