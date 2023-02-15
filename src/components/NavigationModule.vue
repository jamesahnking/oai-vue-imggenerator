<template>
    <div class="bg-gray-800 py-3 px-6 shadow-2 flex align-items-center justify-content-center relative lg:static border-bottom-1 border-gray-800"
        style="min-height: 84px">
        <img src="../images/logos/openai-icon-505x512-pr6amibw.png" alt="Image" height="50" class="mr-2">
        <img src="../images/logos/jaklogotype.svg" alt="Image" height="40" class="mr-0 lg:mr-6 ">
        <!-- <a v-ripple class="cursor-pointer block lg:hidden text-gray-400 mt-1 p-ripple"
            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
            <i class="pi pi-bars text-4xl"></i>
        </a> -->
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import axios from 'axios';
const url = "http://localhost:5001/openai/generateimage/";
// import PostService from '../../PostService';
import srcImage from '../images/src/1024x1024_pholder.png';
export default defineComponent({
    name: "PromptForm",
    data() {
        return {
            prompt: '',
            resImage: '',
            srcImage: srcImage,
            loading: false,
        }
    },
    mounted() {
    },

    methods: {
        // Send text to AI  
        async sendText() {
            this.loading = true;
            const res = await axios.post(url, {
                prompt: this.prompt,
            })
            this.resImage = res.data.data;
            console.log(`Hey its RESIMAGE ${this.resImage}`)
        }
    },
    components: {},
});
</script>
<style scoped>

</style>
