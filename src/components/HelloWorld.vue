<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>
      <span>{{ userData }}</span>

      <div class="py-14" />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const userData = ref()
userData.value = JSON.parse(localStorage.getItem('userData') || '{}')
</script>
