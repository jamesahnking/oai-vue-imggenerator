<template>

    <h5>Body</h5>
    <InputText type="text" v-model="body" />
    <span :style="{ marginLeft: '.5em' }">{{ body }}
    </span>

    <h5>Tags</h5>
    <div class="tag-input">
        <input v-model="newTag" type="text" 
        @keydown.enter="addTag(newTag)"
        @keydown.prevent.tab="addTag(newTag)"
        @keydown.delete="newTag.length || removeTag(tags.length - 1)"
        />
        <ul class="tags">
            <!-- <li v-for="(tag, index) in tags" :key="tag" class="tag">
                {{ tag }}
                <button class="delete" @click="removeTag(index)">x</button>
            </li> -->
        </ul>
    </div>

    <h5>Blob</h5>
    <div>
        <p>{{ resImage }}</p>
    </div>

    <h5>Title</h5>
    <InputText type="text" v-model="title" />
    <span :style="{ marginLeft: '.5em' }">{{ title }}
    </span>

    <Button label="Get Posts" icon="pi pi-external-link" @click="getPosts" class="mr-2"/>
    <Button label="Add Posts" icon="pi pi-external-link" @click="addPosts" class="mr-2"/>
    <Button label="List Tags" icon="pi pi-external-link" @click="listTags" class="mr-2"/>
    <Button label="Delete Posts" icon="pi pi-external-link" @click="deletePost" class="mr-2"/>

</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import { getDocs, setDoc, doc, deleteDoc } from '@firebase/firestore'
import { postsCol } from '../composeables/useDatabase'
import { serverTimestamp } from "firebase/firestore";

export default defineComponent({
    name: "PostModule",
    // prep tag data for transmission
    props:{
        resImage: String,
        modelValue: {type: Array, default: () => []},
    },
    
    setup(props, {emit}) {
        
        // set tags to modelValue
        const tags = ref(props.modelValue);
        const newTag = ref('');

        const addTag = (tag:any) => {
            tags.value.push(tag);
            newTag.value = ""; // reset tag
        }

        const removeTag = (index:any) => {
            tags.value.splice(index, 1)
        }

        // publish data when tag data has changed
        const onTagsChanged = () => {
            emit("update:modelValue", tags.value)
        }

        return { tags, newTag, addTag, removeTag, onTagsChanged }
    },

    data() {
        return {
            name: '',
            postData: [],
            body: '',
            tag: '',
            title: '',
            index:[],
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
                console.log(post.title, post.tags, post.body, post.blob)
            })
        },
        // add a post to Firebase
        async addPosts() {
            const postPost = doc(postsCol)
            await setDoc(postPost, {
                body: this.body,
                tags: this.tags as any,
                title: this.title,
                blob: this.resImage as any,
                meta: {
                    created: serverTimestamp()
                }
            })
        },

        async deletePost() {   
            const postPost = doc(postsCol, 'YUdI2XxKP7n1xMfk7ktG')
            deleteDoc(postPost)
        },

        async listTags() {
        // List added tags to console
        console.log(this.tags)

        }
    },
});
</script>

<style scoped>
h5,
p {
    color: white;
}

ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 0;
    padding: 0;
}


.tag {
    background: rgb(250, 105, 109);
    padding: 1px;
    border-radius: 4px;
    color: white;
    white-space: nowrap;
}

.delete {
    color: white;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
}

input {
    width: 100%;
    padding: 10px;
}
</style>
