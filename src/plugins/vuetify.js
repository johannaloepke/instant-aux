import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#1DB954',
        secondary: '#FFFFFF',
        accent: '#000000',
        error: '#D1001A',
        success: '#23947A',
        warning: '#FFC107'
      },
      dark: {
        primary: '#000000',
        secondary: '#1DB954',
        accent: '#FFFFFF',
        error: '#D1001A',
        success: '#23947A',
        warning: '#FFC107'
      }
    }
  },
  options: {
    // Enabling customProperties creates a CSS variable for each theme color https://vuetifyjs.com/en/framework/theme#custom-properties
    customProperties: true
  }
});
