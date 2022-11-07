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