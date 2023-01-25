<template>
  <Button @click="downloadImg" label="Save this blicky" class="pi-pallet w-full py-3"></Button>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FileSaver, { saveAs } from 'file-saver';


export default defineComponent({
  name: 'SaveToServerModule',
  props: {
    resImage: String,
  },
  data() {
    return {
      link: this.resImage
    }
  },
  created() {
    this.remoteURL();
    console.log(this.remoteURL);
  },
  methods: {
    downloadImg() {
      FileSaver.saveAs(this.resImage!,)
      console.log('downloading', this.resImage);
    },
    remoteURL() {
      //return this.BASE_URL + link //link is the image's path fetched from database
      return this.link;
    },
  }
});

</script>

<style scoped>

</style>


