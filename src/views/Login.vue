<template>
  <div class="d-flex align-center justify-center h-100 w-100">
    <v-card width="600">
      <v-card-text class="text-center">
        <h1 class="mb-3">Login</h1>
        <v-form>
          <v-row>
            <v-col cols="12">
              <v-text-field label="username"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field label="password"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-btn block color="primary">Login</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>