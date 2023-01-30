<template>
  <div class="d-flex align-center justify-center h-100 w-100">
    <v-card width="600">
      <v-card-text>
        <h1 class="text-center mb-6">Register</h1>
        <v-form ref="registerForm" @submit.prevent="register">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="registerData.username" label="Username"
                :rules="[v => !!v || 'User Name is required']"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="registerData.email" label="Email"
                :rules="[v => !!v || 'Email is required']"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="registerData.password" type="password" label="Password"
                :rules="[v => !!v || 'password is required']"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field type="password" label="Confirm Password"
                :rules="[v => !!v || 'password is required']"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-btn type="submit" block color="primary">register</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { VForm } from 'vuetify/components'
import axios from '@axios';
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const registerForm = ref<VForm>()
const registerData = ref({
  username: '',
  email: '',
  password: '',
})

const router = useRouter()
const register = () => {
  registerForm.value?.validate().then(() => {
    axios.post('/register', {
      username: registerData.value.username,
      email: registerData.value.email,
      password: registerData.value.password,
    }).then((response) => {
      localStorage.setItem('userData', JSON.stringify(response.data))
      router.push('/')
    }).catch(error => {
      console.log(error);
    })
  })
}
</script>