<script setup lang="ts">
import { doubleDec, doubleInc } from '@nuxt-integrated/utils';
import { ref } from 'vue';

const count = ref(0);
const incr = () => {
  count.value = doubleInc(count.value);
};
const dec = () => {
  count.value = doubleDec(count.value);
};
</script>
<template>
  <div>
    <button @:click="dec">-</button>
    <button @:click="incr">+</button>

    {{ count }}
  </div>
</template>
