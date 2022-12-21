<template>
    <div class="grid grid-nogutter surface-card">

        <!-- COl1 -->
        <div class="col-12 md:col-12 lg:col-6">
            <div class="p-7 ">
                <div class="border-round surface-card">
                    <h1>OpenAI Image Generator</h1>
                    <p>Describe a fantastical image in words, and our magical AI will created its best representation on
                        the right.</p>
                </div>
                <label for="email4" class="block text-900 font-xs mb-2">Image Description</label>
                <InputText id="email4" v-model="prompt" type="text" class="w-full mb-3 p-3"
                    placeholder="Ex. A dragon sipping a beer on a volcano" />
                <Button @click="sendText" label="Generate a New AI Image" class="w-full py-3 "></Button>
            </div>
        </div>

        <!-- COl2 -->
        <div class="col-12 md:col-12 lg:col-6">
            <div class="p-0">
                <div class="border-round surface-card">

                    <div v-if=!resImage>
                        <img :src="srcImage" alt="img" class="image-fit" />                    
                    </div>

                    <div v-if=loading>
                                
                        <ProgressBar mode="indeterminate" style="height: .20em" />
                    </div>

                    <div v-else>
                        <img :src="resImage" alt="img" class="image-fit" />
                    </div>

                </div>
            </div>
        </div>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import axios from 'axios';
const url = "https://oai-express-serve.herokuapp.com/openai/generateimage/";
import srcImage from '../images/src/1024x1024_pholder.png';
export default defineComponent({
    name: "PromptModule",
    data() {
        return {
            prompt: '',
            resImage: '',
            srcImage: srcImage,
            imageHeight: '500px',
            imageVal: srcImage,
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
            this.loading = false;

        }
    },
    components: {},
});
</script>
<style scoped>
.image-fit {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>
    