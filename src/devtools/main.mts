import { createApp } from 'vue';
import DevtoolsApp from './DevtoolsApp.vue';

// Vuetify initialization
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },

  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },

  components,
  directives,
});

createApp(DevtoolsApp)
  .use(vuetify)
  .mount('#app')
  ;