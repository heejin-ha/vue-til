<template>
    <div>
        <ul>
            <li>
                <div class="post-title"> {{ postItem.title}} </div>
                <div class="post-contents"> {{ postItem.contents}} </div>
                <div class="post-time"> {{ postItem.createdAt}} </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        postItem: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>