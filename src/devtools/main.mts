import { createApp } from 'vue';
import DevtoolsApp from './DevtoolsApp.vue';

// Vuetify initialization
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
// import * as components from 'vuetify/components';
// import * as directives from 'vuetify/directives';
import { aliases, fa } from 'vuetify/iconsets/fa-svg';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/pro-solid-svg-icons';

config.autoAddCss = true;
config.autoA11y = true;

library.add(fas);

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
  },

  icons: {
    defaultSet: 'fa-svg',
    aliases,
    sets: {
      fa,
    },
  },

  // components,
  // directives,
});

createApp(DevtoolsApp)
  // Register FontAwesomeIcon component
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .component('FontAwesomeLayers', FontAwesomeLayers)
  .component('FontAwesomeLayersText', FontAwesomeLayersText)
  .use(vuetify)
  .mount('#app')
  ;