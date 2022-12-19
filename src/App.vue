<template>
    <PromptModule />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PromptModule from './components/PromptModule.vue';

export default defineComponent({
  name: "App",
  data() {},
  mounted() {
    console.log("app mounted");
  },
  methods: {
  },
  components: {
    PromptModule
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
</style>
