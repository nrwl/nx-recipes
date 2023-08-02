<script setup lang="ts">

const count = ref(0);
const incr = () => count.value++;
const dec = () => count.value--;
</script>
<template>
  <div>
    <button v-on:click="dec">-</button>
    <button v-on:click="incr">+</button>

    {{ count }}
  </div>
</template>
