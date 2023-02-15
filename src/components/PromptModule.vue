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
                <div class="border-round surface-card text-center">
                    <h1>OpenAI Image Generator</h1>
                    <p>Describe a fantastical image in the text field.</p>
                    
                </div>
                <InputText id="email4" v-model="prompt" type="text" class="w-full mb-3 p-3"
                    placeholder="Ex. an isometric view of a miniature city, tilt shift, high detail" />
                <Button @click="getData" label="Generate a new AI Image" class="pi-pallet w-full py-3"></Button>
            </div>
        </div>

        <!-- COl2 conditional Image display-->
        <div class="col-12 md:col-12 lg:col-6">
            <div class="p-0">
                <div class="border-round surface-card">

                    <div v-show="loading">
                        <ProgressBar mode="indeterminate" style="height: .5em" />
                    </div>

                    <div v-if="resImage">
                        <img v-bind:src="'data:image/jpeg;base64,' + resImage" class="image-fit" />
                    </div>

                    <div v-else>
                        <img :src="`${srcImage}`" class="image-fit">
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import type { Blob } from '@/types/Blob'
const url = "https://oai-express-serve.herokuapp.com/openai/generateimage/";
const dalleEndpoint = 'https://api.openai.com/v1/images/generations';
import srcImage from '../images/src/1024x1024_pholder.png';
// import PostModule from '../components/PostModule.vue';
// import DisplayModule from './DisplayModule.vue';



export default defineComponent({

    name: "PromptModule",
    data() {
        return {
            data: null,
            loading: false,
            error: null as any,
            listItems: [] as any,
            prompt: '',
            resImage: null,
            blobImage: [] as Blob[],
            anImage: {},
            tags: ['hello', 'goodbye'],
            srcImage,
            imageHeight: '500px',
            // loading: false,
            // error: false,
            displayBasic: false,
            count: 2,
            promptMessage: '',

        }
    },
    mounted() {
    },
    setup() {

    },
    methods: {


        async getData() {
            // Form the request body
            const reqBody = {
                prompt: this.prompt,
                n: this.count,
                response_format: 'b64_json',
            }

            //Construct the data for the POST request
            const reqParams = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                },
                body: JSON.stringify(reqBody)
            }

            await fetch(dalleEndpoint, reqParams)
                .then(res => res.json())
                .then((response) => {
                    this.resImage = response.data[0].b64_json
                })
                .then(() => {
                    this.loading = false;
                })
                // .then(json => this.processb64(json))
                .catch(error => {
                    console.log(`Something Went Wrong ${error}`);
                });
        },

        // Cycle through JSON response and buffer to image - fs not compatible with Vue3:    
        // processb64(jsonData: any) {
        //     for (let i = 0; i < jsonData.data.length; i++) {
        //         const b64 = jsonData.data[i].b64_json
        //         // const buffer = Buffer.from(b64, "base64");
        //         this.resImage = b64;
        //         console.log("Listing b64 blob " + this.resImage);
        //         // fs.writeFileSync(filename, buffer);
        //     }
        // },
        // img = {  encodedImage: 'data:image/jpg;base64,/9x/4AFQSkZJRgABAXAASABIAAD...'}
        openBasic() {
            this.displayBasic = true; ``
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
