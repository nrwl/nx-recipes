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
    <button data-testid="decrement" @:click="dec">-</button>
    <button data-testid="increment" @:click="incr">+</button>

    <p data-testid="count">
      {{ count }}
    </p>
  </div>
</template>
