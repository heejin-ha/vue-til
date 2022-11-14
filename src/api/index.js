import axios from "axios";
import store from "@/store/index";
import { setInterceptors } from './common/interceptors'

// axios 초기화 함수
const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
      Authorization: store.state.token
    }
  });
  return setInterceptors(instance);
};

const instance = createInstance();

// 회원가입 API
const registerUser = userData => {
  return instance.post("signup", userData);
};

// 로그인 API
const loginUser = userData => {
  return instance.post("login", userData);
};

// 학습 노트 데이터 조회 API
const fetchPosts = () => {
  return instance.get('posts');
}

// 학습 노트 데이터 생성 API
const createPost = (post) => {
  return instance.post('posts', post);
}

export { registerUser, loginUser, fetchPosts, createPost };
