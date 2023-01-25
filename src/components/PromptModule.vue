<template>
    <!-- <div> -->
        <!-- <PostModule v-model="tags" :resImage ='resImage'/> -->
        <!-- <ul>
            <li v-for="tag in tags" :key="tag">{{ tag }}</li>
        </ul>
    </div> -->
    <div class="grid grid-nogutter surface-card col-12">
<!-- 
        <Dialog v-if="prompt.length!" v-model:visible="displayBasic" :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
            :style="{ width: '50vw' }">
            <p>Make sure your add text to the prompt killa!</p>
            <template #footer>
                <Button label="Got It!" icon="pi pi-check" @click="closeBasic" autofocus />
            </template>
        </Dialog> -->

        <!-- COl1 -->
        <div class="col-12 md:col-12 lg:col-6">
            <div class="p-4 ">
                <div class="border-round surface-card">
                    <h1>OpenAI Image Generator</h1>
                    <p>Describe a fantastical image in words, and our magical AI will created its best representation on
                        the right.</p>
                </div>
                <label for="email4" class="block text-900 font-xs mb-2">Image Description</label>
                <InputText id="email4" v-model="prompt" type="text" class="w-full mb-3 p-3"
                    placeholder="Ex. A dragon sipping a beer on a volcano" />
                <Button @click="sendText" label="Generate a new AI Image" class="pi-pallet w-full py-3"></Button>
            </div>
        </div>

        <!-- COl2 -->
        <div class="col-12 md:col-12 lg:col-6">
            <div class="p-0">
                <div class="border-round surface-card">
                    <div v-show="loading">
                        <ProgressBar mode="indeterminate" style="height: .5em" />
                    </div>
                    <div v-if="resImage.length">
                        <img :src="`${resImage}`" class="image-fit">
                        <img :src="`${blobImage}`" class="image-fit">
                    </div>
                    <div v-else>
                        <img :src="`${srcImage}`" class="image-fit">
                    </div>
                </div>
            </div>
        </div>

        <div>
        <!-- <DisplayModule :resImage ='resImage'/> -->

    </div>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import type { Blob } from '@/types/Blob'
import axios from 'axios';
const url = "https://oai-express-serve.herokuapp.com/openai/generateimage/";
import srcImage from '../images/src/1024x1024_pholder.png';
// import PostModule from '../components/PostModule.vue';
// import DisplayModule from './DisplayModule.vue';

export default defineComponent({
    
    name: "PromptModule",
    data() {
        return {
            prompt: '',
            resImage: '',
            blobImage:[] as Blob[],
            anImage:{},
            tags:['hello','goodbye'],
            srcImage,
            imageHeight: '500px',
            loading: false,
            error: false,
            displayBasic: false,
        }
    },
    mounted() {
    },
    methods: {



        blobToFile(theBlob:any, fileName:any) {
            console.log(theBlob);
            return new File([theBlob], fileName, { lastModified: new Date().getTime(), type: theBlob.type})
        },

        async sendText() {
            try {

                this.loading = true;
                const res = await axios.post(url, {
                    prompt: this.prompt,
                    responseType: "blob"
                })

                this.resImage = res.data.data;
                this.blobImage = res.data;
                this.loading = false;
                console.log(`Hey its RESIMAGE ${this.resImage} this.loading = ${this.loading}`)

            } catch (err) {

                this.loading = false;
                this.error = true;
                this.openBasic();
                console.log(`Error - YOu need to add text for this to work`)
            }
            
            this.blobToFile(this.blobImage, 'image')
        },

        openBasic() {
            this.displayBasic = true;``
        },
        closeBasic() {
            this.displayBasic = false;
        },
    },
    components: {
        // PostModule,
        // DisplayModule

    },
});
</script>
<style scoped>
.image-fit {
    height: 100%;
    width: 100%;
    object-fit: cover;
    }
</style>
