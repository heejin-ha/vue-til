<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <PostListItem
        v-for="postItem in postItems"
        :key="postItem._id"
        :postItem="postItem"></PostListItem>
      
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem.vue';

export default {
  data() {
    return {
      postItems: [],
    }
  },
  components: {
    PostListItem
  },
  methods: {
    async fetchNotes() {
      const { data } = await fetchPosts();
      this.postItems = data.posts;
    }
  },
  created() {
    this.fetchNotes();
  }

}
</script>

<style>

</style>