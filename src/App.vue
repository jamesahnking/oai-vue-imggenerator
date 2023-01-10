<template>


 
  <PromptModule />


</template>

<script lang="ts">
import { defineComponent } from "vue";
import PromptModule from './components/PromptModule.vue';
import NavigationModule from "./components/NavigationModule.vue";
import PostModule from './components/PostModule.vue';

export default defineComponent({
  name: "App",
  data() {
    return{
      tags:['Hello','App']
    }
  },
  mounted() {
    console.log("app mounted");
  },
  methods: {
  },
  components: {
    PromptModule,
    // NavigationModule,
    PostModule,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background-color: #2c3e50;
}

ul {
  color: white;
}
</style>
