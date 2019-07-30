<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <h1 class="display-2 font-weight-bold mt-3 pb-0 pa-3 pt-5">
          What do you want to hear?
        </h1>
        <h3 class="font-weight-light mt-3 mb-5 pb-5 pt-2">
          Choose up to five identifiers
        </h3>
      </v-flex>

      <v-flex mb-4>
        <p class="display-1 font-weight-medium"> Genres </p>
        <Genres
          @genres_selected="genresSelected($event)" />
          

        <p class="display-1 font-weight-medium mt-5 pt-5"> Artists </p>
        <SearchChips
          label="twenty one pilots"
          @chip_searched="artistsSearched($event)" />
      </v-flex>
      
      <v-layout justify-center>
        <v-flex xs10 md4>
          <v-spacer></v-spacer>
          <v-btn
            x-large
            block
            color="primary"
            @click="submit"
          > 
          Submit 
          </v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import SearchChips from '../components/SearchChips.vue'
import Genres from '../components/Genres.vue'
import { eventBus } from '../main.js';

export default {
  components: {
    SearchChips,
    Genres
  },
  data: () => ({
    accessToken: '',
    genres: [],
    artists: [],
    artistToId: {}
  }),
  created() {
    this.authenticate();
  },
  methods: {
    // Get a temporary access token in order to query the Spotify API
    authenticate() {
      var credentials = process.env.VUE_APP_SPOTIFY_CLIENT_ID + ':' + process.env.VUE_APP_SPOTIFY_CLIENT_SECRET;
      var encodedCredentials = new Buffer(credentials).toString('base64');

      const authEndpoint = 'https://accounts.spotify.com/api/token';
      
      // SECURITY ALERT: This request should actually be run on a back-end service and not client side so as not to expose secret keys
      axios({
        method: 'post',
        url:'https://cors-anywhere.herokuapp.com/'+ authEndpoint,
        params: {
            grant_type: 'client_credentials'
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + encodedCredentials
        },
        data: null
      })
      .then(response => {
        this.accessToken = response.data.access_token;
        this.$emit('authenticated');
      })
      .catch(error => {
        console.log(error);
      })
    },
    // Update the list of genres selected, triggered by an event emitted from the child component Genres
    genresSelected: function(selected) {
      console.log(selected);
      this.genres = selected;
    },
    // Update the tracks, artists, or albums selected, triggered by an event emitted from the child component TrackArtistOrAlbum.vuw
    artistsSearched: function(artistList) {
      console.log(artistList);
      this.artists = artistList;
      this.search();
    },
    search() {
      const searchEndpoint = 'https://api.spotify.com/v1/search';
      for (const artist of this.artists) {
        if (this.artistToId[artist.toLowerCase()]) {
          console.log('ALREADY HERE')
          // If the artist's id has already been found, don't query it again
        } 
        else {
          axios({
            method: 'get',
            url:'https://cors-anywhere.herokuapp.com/'+ searchEndpoint,
            params: {
                q: artist,
                type: 'artist'
            },
            headers: {
                'Authorization': 'Bearer ' + this.accessToken
            },
            data: null
          })
          .then(response => {
            if (response.data) {
              // Take the first, most popular artist that matches
              const result = response.data.artists.items[0];
              this.artistToId[result.name.toLowerCase()] = result.id;
            }
            console.log('SEARCH COMPLETE');
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          })
        }
      }

    },
    submit() {
      // Search Spotify for the given artist, genre, or track
      console.log(this.accessToken);
      console.log(this.artistToId);
      const recommendationEndpoint = 'https://api.spotify.com/v1/recommendations';
      const spotifyIds = Object.values(this.artistToId).join();
      axios({
        method: 'get',
        url:'https://cors-anywhere.herokuapp.com/'+ recommendationEndpoint,
        params: {
            seed_genres: this.genres.join(),
            seed_artists: spotifyIds
        },
        headers: {
            'Authorization': 'Bearer ' + this.accessToken
        }, 
        data: null
      })
      .then(response => {
        console.log(response.data.tracks[0].external_urls.spotify);
        this.$router.push({
          name: 'results', 
          params: { 
            tracks: response.data.tracks,
          } 
        });
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  beforeDestroy () {
    // Teardown leaky properties https://alligator.io/vuejs/component-lifecycle/
    delete this.accessToken;
    delete this.genres;
    delete this.artists;
    delete this.artistToId;
  },
};
</script>

<style scoped>
.v-btn {
  font-size: 1.5em;
}
</style>
