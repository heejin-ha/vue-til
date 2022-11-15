<template>
    <div class="contents">
        <h1 class="page-header">Edit Post</h1>
        <div class="form-wrapper">
            <form class="form" @submit.prevent="submitForm">
                <div>
                    <label for="title">Title: </label>
                    <input type="text" id="title" 
                        v-model="title" />
                </div>
                <div>
                    <label for="contents">Contents: </label>
                    <textarea type="text" id="contents" rows="3"
                        v-model="contents"></textarea>
                    <p class="validation-text warning"
                        v-if="!isContentsValid"> Contents must be less than 200.</p>
                </div>
                <button type="submit" class="btn">Edit</button>
            </form>
            <p class="log">{{ logMesaage }}</p>
        </div>
    </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
export default {
    data() {
        return {
            id: '',
            title: '',
            contents: '',
            logMesaage: '',
        }
    },
    computed: {
        isContentsValid() {
            return this.contents.length <= 200;
        }
    },
    methods: {
        async fetchPost() {
            const { data } = await fetchPost(this.id);
            this.title = data.title;
            this.contents = data.contents;
        },
        async submitForm() {
            await editPost(this.id, { 
                title: this.title,
                contents: this.contents
            });
            this.$router.push('/main');

        }
    },
    async created() {
        this.id = this.$route.params.id;
        await this.fetchPost();
    }
}
</script>

<style scoped>
.form-wrapper .form {
    width: 100%;
}
.btn {
    color: white;    
}

</style>