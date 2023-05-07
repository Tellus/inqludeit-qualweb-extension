import { createApp } from 'vue';
import DevtoolsApp from './DevtoolsApp.vue';

// Vuetify initialization
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(DevtoolsApp)
  .use(vuetify)
  .mount('#app')
  ;