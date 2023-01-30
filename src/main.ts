/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import '@/@fake-db/db'
import App from './App.vue'
import ability from '@/plugins/casl/ability'
import { abilitiesPlugin } from '@casl/vue'
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(abilitiesPlugin, ability, {
  useGlobalProperties: true,
})
app.mount('#app')
