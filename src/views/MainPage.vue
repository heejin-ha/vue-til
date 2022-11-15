<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading" />

      <ul v-else>
        <PostListItem
            v-for="postItem in postItems"
            :key="postItem._id"
            :postItem="postItem"></PostListItem>
      </ul>
    </div>
    
    <router-link to="/add" class="create-button">
      <ion-icon name="add-outline"></ion-icon>
    </router-link>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/posts';
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  data() {
    return {
      postItems: [],
      isLoading: false,
    }
  },
  components: {
    PostListItem,
    LoadingSpinner,
  },
  methods: {
    async fetchNotes() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
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