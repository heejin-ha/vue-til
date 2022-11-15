/**
 * 학습 노트 조작과 관련된 api
 */
import { authInstance } from '@/api/index';

// 학습 노트 데이터 조회 API
const fetchPosts = () => {
    return authInstance.get('posts');
}

// 학습 노트 데이터 생성 API
const createPost = (post) => {
    return authInstance.post('posts', post);
}

const deletePost = (id) => {
    return authInstance.delete(`posts/${id}`);
}

const fetchPost = (id) => {
    return authInstance.get(`posts/${id}`);
}

const editPost = (id, post) => {
    return authInstance.put(`posts/${id}`, post);
}

export {
    fetchPosts,
    createPost,
    deletePost,
    fetchPost,
    editPost
}
  