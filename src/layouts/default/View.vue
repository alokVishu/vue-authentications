<template>
  <v-main>
    <v-container class="h-100">
      <router-view />
      <TheCustomizer></TheCustomizer>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import TheCustomizer from '@/components/TheCustomizer.vue';
</script>
