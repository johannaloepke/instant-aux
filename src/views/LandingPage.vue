<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <h1 class="display-2 font-weight-bold mt-3 pa-1 pt-5">
          What do you want to hear?
        </h1>
        <h3 class="font-weight-light mt-3 mb-5 pb-5 pt-2">
          Please choose at least one genre or artist.
        </h3>
      </v-flex>

      <v-flex mb-4>
        <p class="display-1 font-weight-medium"> Genres </p>
        <Genres
          @genres_selected="genresSelected($event)" />
          

        <p class="display-1 font-weight-medium mt-5 pt-5 pb-3"> Artists </p>
        <SearchChips
          label="e.g. twenty one pilots"
          @chip_searched="artistsSearched($event)" />

        <v-layout justify-center>
          <v-flex xs10>
            <p class="display-1 font-weight-medium mt-5 pt-5 mb-7"> Track Attributes </p>
            <attribute-slider
              label="Acousticness"
              prependIcon="mdi-guitar-electric"
              appendIcon="mdi-guitar-acoustic"
              @attribute_value="acousticnessValue($event)" />
          </v-flex>
        </v-layout>

        <v-layout justify-center>
          <v-flex xs10>
            <attribute-slider
              label="Danceability"
              prependIcon="mdi-human-male"
              appendIcon="mdi-human-handsup"
              @attribute_value="danceabilityValue($event)" />
          </v-flex>
        </v-layout>

        <v-layout justify-center>
          <v-flex xs10>
            <attribute-slider
              label="Liveness"
              prependIcon="mdi-headphones"
              appendIcon="mdi-microphone-variant"
              @attribute_value="energyValue($event)" />
          </v-flex>
        </v-layout>

        <v-layout justify-center>
          <v-flex xs10>
            <attribute-slider
              label="Energy"
              prependIcon="mdi-tortoise"
              appendIcon="mdi-rabbit"
              @attribute_value="energyValue($event)" />
          </v-flex>
        </v-layout>

        <v-layout justify-center>
          <v-flex xs10>
            <attribute-slider
              label="Mood"
              prependIcon="mdi-emoticon-sad"
              appendIcon="mdi-emoticon-happy"
              @attribute_value="moodValue($event)" />
          </v-flex>
        </v-layout>
      </v-flex>
      
      <v-layout justify-center>
        <v-flex xs10 md4>
          <v-spacer></v-spacer>
          <v-btn
            :loading="loading"
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
import AttributeSlider from '../components/AttributeSlider.vue'
import SearchChips from '../components/SearchChips.vue'
import Genres from '../components/Genres.vue'
import { eventBus } from '../main.js';

export default {
  components: {
    SearchChips,
    Genres,
    AttributeSlider
  },
  data: () => ({
    loading: null,
    accessToken: '',
    genres: [],
    artists: [],
    artistToId: {},
    danceability: null,
    acousticness: null,
    liveness: null,
    mood: null,
    energy: null
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
      this.genres = selected;
    },
    // Update the tracks, artists, or albums selected, triggered by an event emitted from the child component TrackArtistOrAlbum.vuw
    artistsSearched: function(artistList) {
      this.artists = artistList;
      this.search();
    },
    danceabilityValue: function(value) {
      this.danceability = value;
    },
    acousticnessValue: function(value) {
      this.acousticness = value;
    },
    livenessValue: function(value) {
      this.liveness = value;
    },
    moodValue: function(value) {
      this.mood = value;
    },
    energyValue: function(value) {
      this.energy = value;
    },
    search() {
      // Search for the spotify ID of an artist
      const searchEndpoint = 'https://api.spotify.com/v1/search';
      for (const artist of this.artists) {
        if (this.artistToId[artist.toLowerCase()]) {
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
          })
          .catch(error => {
            console.log(error);
          })
        }
      }
    },
    submit() {
      this.loading = true;
      // Search Spotify for the given artist, genre, or track
      const recommendationEndpoint = 'https://api.spotify.com/v1/recommendations';
      // Genres + Artists must be <= 5 for API parameters
      const spotifyIds = Object.values(this.artistToId).slice(0, 5 - this.genres.length);
      console.log(this.danceability / 100.0);
      axios({
        method: 'get',
        url:'https://cors-anywhere.herokuapp.com/'+ recommendationEndpoint,
        params: {
            seed_genres: this.genres.join(),
            seed_artists: spotifyIds.join(),
            danceability: this.danceability / 100.0,
            acousticness: this.acousticness / 100.0,
            liveness: this.liveness / 100.0,
            mood: this.mood / 100.0,
            energy: this.energy / 100.0
        },
        headers: {
            'Authorization': 'Bearer ' + this.accessToken
        }, 
        data: null
      })
      .then(response => {
        this.$router.push({
          name: 'results', 
          params: { 
            tracks: response.data.tracks,
          } 
        });
      })
      .catch(error => {
        this.loading = false;
        console.log(error);
      })
    }
  },
  beforeDestroy () {
    // Teardown leaky properties https://alligator.io/vuejs/component-lifecycle/
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
