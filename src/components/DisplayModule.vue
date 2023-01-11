<template>
    <div class="surface-ground">
        <div class="grid">
                <div v-for="(posts, index) in postRes" :key="index" class="w-6 p-1">
                <div class="col-12 lg:col-4 p-3">
                    <div
                        class="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
                        <div class="p-4">
                            <div class="flex align-items-center">
                                <!-- <span
                                class="inline-flex border-circle align-items-center justify-content-center bg-green-100 mr-3"
                                style="width:38px;height:38px">
                                <i class="pi pi-globe text-xl text-green-600"></i>
                            </span> -->
                                <span class="text-900 font-medium text-2xl">{{ posts.title }}</span>
                            </div>

                            <p class="mt-0 mb-3 text-700 line-height-3">Tags: {{ posts.tags }}</p>
                            <p class="mt-0 mb-3 text-700 line-height-3">Image: {{ posts.blob }}...</p>
                            <p class="mt-0 mb-3 text-700 line-height-3">Description: {{ posts.body }}</p>

                            <div class="px-4 py-3 text-right">
                                <Button icon="pi pi-arrow-right" label="View"
                                    class="p-button-rounded p-button-success mr-2"></Button>
                                <Button icon="pi pi-arrow-right" label="Delete"
                                    class="p-button-rounded p-button-success mr-2"></Button>
                                <Button icon="pi pi-arrow-right" label="Publish"
                                    class="p-button-rounded p-button-success "></Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { getDocs, doc, deleteDoc } from '@firebase/firestore'
import { postsCol } from '../composeables/useDatabase'

import { onSnapshot } from '@firebase/firestore'


export default defineComponent({
    name: "DisplayModule",
    data() {
        return {
            postRes: [] as any,
            image: String,
        }
    },
    setup() {
    },
    mounted() {
        this.getPostSnap();
    },
    methods: {
        async getPosts() {
            const postDataRes = await getDocs(postsCol)
            postDataRes.docs.forEach((postData) => {
                const post = postData.data()
                this.postRes = post
                console.log(post.title, post.tags, post.body, post.blob)
            })
        },

        async getPostSnap() {
            return onSnapshot(postsCol, (snap) => {

                const posts = snap.docs.map(x => x.data())
                this.postRes = posts
                const postCreated = posts.map(x => `${x.meta.created}`)
                const postBlobs = posts.map(x => `${x.blob}`)
                const postBody = posts.map(x => `${x.body}`)
                const postTags = posts.map(x => `${x.tags}`)

                console.log(postCreated,postBlobs,postBody,postTags)
                return { postCreated, postBlobs, postBody, postTags }
            })
        },
    }
})

</script>

<style scoped>

</style>
