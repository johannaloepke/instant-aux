
<template>
  <v-container>
    <v-layout
      text-xs-center
      justify-center
      wrap
    >

      <h1 class="display-2 font-weight-bold ma-5 pa-3 pb-6 mb-10"> Results: </h1>
  
      <!-- TODO: Add loading bar for better feedback -->
      <div v-for="link in embedLinks" :key="link.id" class="mb-n8 mt-n5">
        <iframe 
          :src="link"
          frameborder="0" 
          allowtransparency="true" 
          allow="encrypted-media"
          style="width:70vw;height:50%;">
        </iframe>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

export default {
  components: {
  },
  data () {
    return {
      tracks: this.$route.params.tracks,
      embedLinks: []
    }
  },
  created () {
    for (const track of this.tracks) {
      this.embedLinks.push('https://open.spotify.com/embed/track/' + track.id);
    }
  },
  beforeDestroy () {
    delete this.tracks;
    delete this.embedLinks;
  },
}
</script>

<style scoped>
h1 {
  width: 100%;
  text-align: center;
}
</style>



