import axios from "axios";
import store from "@/store/index";
import { setInterceptors } from './common/interceptors';

const createInstance = () => {
  return axios.create({
      baseURL: process.env.VUE_APP_API_URL,
    });
}

// axios 초기화 함수
const createInstanceWithAuth = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
      Authorization: store.state.token
    }
  });
  return setInterceptors(instance);
};

export const instance = createInstance();
export const authInstance = createInstanceWithAuth();