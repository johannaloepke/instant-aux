<template>
    <v-layout justify-center>
    <v-flex xs10>
      <v-chip-group
        v-model="genresSelected"
        multiple
        max=5
        column
        active-class="primary--text"
      >
        <v-chip
          large
          v-for="genre in genres" 
          :key="genre"
        >
          {{ genre }}
        </v-chip>
      </v-chip-group>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    data: () => ({
      // All of Spotify's available genres
      // TODO: maybe trim down on the amount of genres shown? See more option?
      genres: [
        'acoustic',
        'afrobeat',
        'alt-rock',
        'alternative',
        'ambient',
        'anime',
        'black-metal',
        'bluegrass',
        'blues',
        'bossanova',
        'brazil',
        'breakbeat',
        'british',
        'cantopop',
        'chicago-house',
        'children',
        'chill',
        'classical',
        'club',
        'comedy',
        'country',
        'dance',
        'dancehall',
        'death-metal',
        'deep-house',
        'detroit-techno',
        'disco',
        'disney',
        'drum-and-bass',
        'dub',
        'dubstep',
        'edm',
        'electro',
        'electronic',
        'emo',
        'folk',
        'forro',
        'french',
        'funk',
        'garage',
        'german',
        'gospel',
        'goth',
        'grindcore',
        'groove',
        'grunge',
        'guitar',
        'happy',
        'hard-rock',
        'hardcore',
        'hardstyle',
        'heavy-metal',
        'hip-hop',
        'holidays',
        'honky-tonk',
        'house',
        'idm',
        'indian',
        'indie',
        'indie-pop',
        'industrial',
        'iranian',
        'j-dance',
        'j-idol',
        'j-pop',
        'j-rock',
        'jazz',
        'k-pop',
        'kids',
        'latin',
        'latino',
        'malay',
        'mandopop',
        'metal',
        'metal-misc',
        'metalcore',
        'minimal-techno',
        'movies',
        'mpb',
        'new-age',
        'new-release',
        'opera',
        'pagode',
        'party',
        'philippines-opm',
        'piano',
        'pop',
        'pop-film',
        'post-dubstep',
        'power-pop',
        'progressive-house',
        'psych-rock',
        'punk',
        'punk-rock',
        'r-n-b',
        'rainy-day',
        'reggae',
        'reggaeton',
        'road-trip',
        'rock',
        'rock-n-roll',
        'rockabilly',
        'romance',
        'sad',
        'salsa',
        'samba',
        'sertanejo',
        'show-tunes',
        'singer-songwriter',
        'ska',
        'sleep',
        'songwriter',
        'soul',
        'soundtracks',
        'spanish',
        'study',
        'summer',
        'swedish',
        'synth-pop',
        'tango',
        'techno',
        'trance',
        'trip-hop',
        'turkish',
        'work-out',
        'world-music'
      ],
      genresSelected: []
  }),
  watch: {
    // Let the parent know which genres are currently selected
    genresSelected(selected) {
      let genreNames = [];
      for (let index of selected) {
        genreNames.push(this.genres[index]);
      }
      this.$emit('genres_selected', genreNames);
    }
  },
  beforeDestroy () {
    delete this.genres;
  }
};
</script>
