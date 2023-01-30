<template>
  <div class="d-flex align-center justify-center h-100 w-100">
    <v-card width="600">
      <v-card-text>
        <h1 class="text-center mb-6">Login</h1>
        <v-form ref="loginForm" @submit.prevent="login">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="loginData.username" label="username" :rules="[v => !!v || 'User Name is required']"
                :error-messages="errors.email"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="loginData.password" type="password" label="password"
                :rules="[v => !!v || 'User Name is required']"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-btn type="submit" block color="primary">Login</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import axios from '@axios'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { VForm } from 'vuetify/components'
const loginForm = ref<VForm>()
const loginData = ref({
  username: '',
  password: ''
})

const ability = useAppAbility()
const errors = ref({
  email: '',
  password: ''
})

const router = useRouter()
const route = useRoute()

const login = () => {
  loginForm.value?.validate().then((isValid) => {
    if (isValid.valid) {
      // localStorage.setItem('userData', loginData.value.username)
      axios.get('/login', {
        params: {
          username: loginData.value.username,
          password: loginData.value.password
        }
      }).then(response => {
        console.log(response);

        const userData = response.data

        console.log(userData.abilities);
        localStorage.setItem('userAbilities', JSON.stringify(userData.abilities))
        ability.update(userData.abilities)
        localStorage.setItem('userData', JSON.stringify(userData))

        //redirect after store data in local storage
        router.replace(route.query.to ? String(route.query.to) : '/')
      }).catch(error => {
        errors.value.email = error.response.data.email
        console.log(error.response.data.email);
      })
    }
  })
}
</script>