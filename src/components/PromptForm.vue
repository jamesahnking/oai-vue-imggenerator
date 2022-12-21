<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-wrap shadow-2">

      <div class="w-full lg:w-6 p-4 lg:p-7 surface-card">
        <div class="flex align-items-start justify-content-between p-2 mb-3">
          <span class="text-2xl font-medium text-900">AI Image Generator</span>
        </div>
        <div class="flex align-items-center justify-content-between mb-4">
          <span class="text-md font-medium text-900">Describe an image in the prompt below then selecte its output
            size.</span>
        </div>
        <label for="email4" class="block text-900 font-medium mb-2">Image Description</label>
        <InputText id="email4" v-model="prompt" type="text" class="w-full mb-3 p-3"
          placeholder="A dragon sipping a beer on a volcano" />

        <div class="flex align-items-center justify-content-between mb-4">
          <Button @click="sendText" label="Save Prompt" class="w-full py-3"></Button>
        </div>

       

      </div>
      <div class="lg:w-6 px-0 py-4 lg:p-7 bg-blue-50">
        <!-- <div class="flex flex-wrap">{{ srcImage }}</div> -->
        <div v-if="loading">
          <ProgressBar mode="indeterminate" style="height: .5em" />        
        </div>

        <div v-else>
          <!-- request finished -->
          <div class="flex flex-wrap">{{ srcImage }}</div>
        </div>
      </div>
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
