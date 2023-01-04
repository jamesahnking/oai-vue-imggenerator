<template>
    <p>Theres are the posts</p>
    <Button label="Get Posts" icon="pi pi-external-link" @click="getPosts" />

</template>
 
<script lang="ts">

import { defineComponent } from 'vue';
import { getDocs } from '@firebase/firestore'
import { postsCol } from '../composeables/useDatabase'

// export const getPosts = async () => {
//     const postDatas= await getDocs(postsCol)
//     postDatas.docs.forEach((postData) => {
//     const post = postData.data()
//     console.log(post.title)
//   })
// }

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
        }

    },

});
</script>

<style scoped>
p {
    color: white;
}
</style>
 