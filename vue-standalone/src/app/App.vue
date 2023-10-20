<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/products">Products</RouterLink>
      </li>
      <li>
        <RouterLink to="/orders">Orders</RouterLink>
      </li>
    </ul>
  </nav>

  <RouterView />
</template>
