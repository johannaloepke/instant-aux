<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>
        <span class="headline font-weight-bold">Instant Aux</span>
        <span
          v-show="$vuetify.breakpoint.smAndUp"
          class="font-weight-light title ml-5"
          v-text="' Generate playlists that everyone will enjoy'"
        />
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        href="https://github.com/johannaloepke/instant-aux/"
        target="_blank"
      >
        <span class="mr-2">Source Code</span>
      </v-btn>
    </v-app-bar>

    <!-- This is the view that will render the component specified in router.js -->
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import LandingPage from './views/LandingPage.vue';

export default {
  name: 'App',
  components: {
    LandingPage,
  },
  data: () => ({
    //
  }),
};
</script>

