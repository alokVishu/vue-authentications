<template>
<v-locale-provider rtl>
  <v-app>
    <default-bar />

    <default-view />
    
  </v-app>
</v-locale-provider> 
</template>

<script lang="ts" setup>

import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
</script>
