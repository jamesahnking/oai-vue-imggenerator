<template>
    <p>Theres are the posts</p>

</template>
 
<script lang="ts">

import { defineComponent } from 'vue';





export default defineComponent({
    name: "PostModule",
    setup() {
    },

    data() {
        return {
            name: '',
            postData: []
        }
    },

    mounted() {
    },

    methods: {

    },

});
</script>

<style scoped>
p {
    color: white;
}
</style>
 