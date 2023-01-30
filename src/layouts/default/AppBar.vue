<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />
      Essentials Preset
    </v-app-bar-title>


    <router-link to="/" class="me-3">Home</router-link>
    <router-link to="/about" class="me-3">About</router-link>
    <router-link to="/service" class="me-3">Service</router-link>
    <UserProfile></UserProfile>
  </v-app-bar>
</template>

<script lang="ts" setup>
import UserProfile from '@/components/UserProfile.vue';
</script>

<style lang="css">
a {
  color: #8b8484;
  text-decoration: none;
}

.router-link-exact-active {
  color: #463d3d;
}
</style>