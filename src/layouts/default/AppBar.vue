<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      Essentials Preset
    </v-app-bar-title>


    <router-link to="/" class="me-3">Home</router-link>
    <router-link to="/about" class="me-3">About</router-link>
    <router-link to="/service" class="me-3">Service</router-link>
    <router-link to="/login" class="me-3">Login</router-link>
    <v-btn color="error" @click="logOut">logout</v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const logOut = () => {
  localStorage.clear()
  router.push({ name: 'Login' })
}
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