<template>
    <div class="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-gray-800"
        style="min-height: 84px">
        <img src="../images/logos/logo.png" alt="Image" height="40" class="mr-0 lg:mr-6">
        <a v-ripple class="cursor-pointer block lg:hidden text-gray-400 mt-1 p-ripple"
            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
            <i class="pi pi-bars text-4xl"></i>
        </a>
        <div
            class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none border-1 lg:border-none border-gray-800">
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                <li>
                    <a v-ripple
                        class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-home mr-2"></i>
                        <span>Open AI Documentation</span>
                    </a>
                </li>
                                
                <!-- <li>
                    <a v-ripple
                        class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-sign-in mr-2"></i>
                        <span>Login</span>
                    </a>
                </li> -->

                <li>
                    <a v-ripple
                        class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-sign-out mr-2"></i>
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
            
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">

                <li class="border-top-1 border-gray-800 lg:border-top-none">
                    <a v-ripple
                        class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-user pr-2 text-3xl"></i>

                        <div class="block lg:hidden">
                            <div class="text-white font-medium">User ID</div>
                            <span class="text-gray-400 font-medium text-sm">User Title</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
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
