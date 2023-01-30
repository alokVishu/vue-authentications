<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import avatar from '@/assets/avatar-1.jpg'

const user = ref<Object>()
const router = useRouter()

onMounted(() => user.value = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {})

const logOut = () => {
  localStorage.clear()
  router.replace({ name: 'Login' })
}
</script>

<template>
  <v-avatar class="cursor-pointer">
    <v-img :src="avatar"></v-img>

    <v-menu activator="parent">
      <v-list>
        <v-list-item v-if="user">
          <v-list-item-title>{{ user.fullName }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item>
        <v-divider class="mt-2"></v-divider>
        <v-list-item v-for="item in ['Home', 'Profile', 'Settings']" :key="item" :value="item">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="logOut">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-avatar>
</template>