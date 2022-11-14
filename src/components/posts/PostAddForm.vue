<template>
    <div class="form-container">
        <div class="contents">
            <h1 class="page-header">Create Post</h1>
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
                    </div>
                    <button type="submit" class="btn">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { createPost } from '@/api/index';

export default {
    data() {
        return {
            title: '',
            contents: ''
        }
    },
    methods: {
        async submitForm() {
            await createPost({
                title: this.title,
                contents: this.contents
            });
        }
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