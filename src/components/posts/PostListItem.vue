<template>
    <li>
        <div class="post-title"> {{ postItem.title}} </div>
        <div class="post-contents"> {{ postItem.contents}} </div>
        <div class="post-time"> 
            {{ postItem.createdAt | formatDate }}
            <ion-icon name="create-outline"
                @click="routeEditPage"></ion-icon>
            <ion-icon name="trash-outline"
                @click="deleteItem"></ion-icon>
        </div>
    </li>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
    props: {
        postItem: {
            type: Object,
            required: true
        }
    },
    // filters: {
    //     formatDate(value) {
    //         return new Date(value);
    //     }
    // },
    methods: {
        async deleteItem() {
            if (!confirm("Are you sure you want to delete")) return false;
            await deletePost(this.postItem._id);
            this.$emit('refresh');
            console.log(`${this.postItem._id} deleted`);
        },
        routeEditPage() {
            this.$router.push(`/post/${this.postItem._id}`);
        }

    }
}
</script>

<style>

</style>