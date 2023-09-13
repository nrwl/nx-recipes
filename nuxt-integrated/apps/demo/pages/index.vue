<script setup lang="ts">
import { Btn } from '@nuxt-integrated/ui';

const { data } = await useFetch('/api/greet?name=Nuxt');
</script>
<template>
  <Btn />
  <pre data-testid="api-results">{{ data }}</pre>
</template>
