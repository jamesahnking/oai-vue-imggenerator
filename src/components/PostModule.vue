<template>
    <p>Theres are the posts</p>
    <Button label="Get Posts" icon="pi pi-external-link" @click="getPosts" />
    <Button label="Add Posts" icon="pi pi-external-link" @click="addPosts" />

</template>
 
<script lang="ts">

import { defineComponent } from 'vue';
import { getDocs, setDoc, collection, doc } from '@firebase/firestore'
import { postsCol } from '../composeables/useDatabase'

export default defineComponent({
    name: "PostModule",
    setup() {
    },

    data() {
        return {
            name: '',
            postData: []
        }
    },

    mounted() {
        
    },

    methods: {
        //get post from Firebase
        async getPosts() {
            const postDatas = await getDocs(postsCol)
            postDatas.docs.forEach((postData) => {
                const post = postData.data()
                console.log(post.title, post.tags, post.body)
            })
        },
        // add a post to Firebase
        async addPosts() {
            const postPost = doc(postsCol)
            await setDoc(postPost, {
                body:'Post Body Test Uno',
                tags: ['tag1','tag2','tag3'],
                title:'This is a title'
            })
        }
    },
});
</script>

<style scoped>

p {
    color: white;
}
</style>
 