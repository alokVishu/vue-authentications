<script lang="ts" setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>

<template>
  <v-btn icon color="primary" @click="drawer = !drawer" class="customizer-toggler" elevation="6">
    <v-icon icon="mdi-cog-outline"></v-icon>
  </v-btn>

  <v-navigation-drawer width="200" v-model="drawer" location="end" temporary>
    <template v-slot:prepend>
      <v-list-item title="Settings">
        <template #append>
            <v-btn icon="mdi-close" variant="text" size="small" @click="drawer = false">
            </v-btn>
        </template>
      </v-list-item>
    </template>
    <v-divider></v-divider>
    <v-card flat>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <p>Mode</p>

            <v-btn icon variant="text">
              <v-icon size="30" icon="mdi-weather-sunny"></v-icon>
            </v-btn>

            <v-btn icon variant="text">
              <v-icon size="30" icon="mdi-weather-night"></v-icon>
            </v-btn>
          </v-col>
        </v-row> 
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>

<style lang="scss">
  .customizer-toggler{
    position: fixed;
    bottom: 1.875rem;
    right: 1.875rem;
  }
</style>