<script setup>
import axios from 'axios';
import { ref } from 'vue';

const apiData = ref();
axios
  .get("/")
  .then((response) => apiData.value = response.data)
  .catch((errors) => {
            console.log(errors);
        });

</script>

<template>
  <div>
    <h1>{{ apiData }}</h1>
  </div>
</template>
