<template>
<v-layout justify-center>
  <v-flex xs10>
    <v-combobox
      v-model="searchChips"
      chips
      append-icon=""
      clearable
      :label="label"
      multiple
      solo
      height="80"
    >
      <template v-slot:selection="{ attrs, item, select, selected }">
      <v-chip
        color="primary"
        v-bind="attrs"
        :input-value="selected"
        close
        @click:close="remove(item)"
      >
          <strong>{{ item }}</strong>&nbsp;
      </v-chip>
      </template>
    </v-combobox>
  </v-flex>
</v-layout>
</template>

<script>
  export default {
    data: () => ({
      searchChips: [],
      items: [],
    }),
    props: {
      label: ''
    },
    watch: {
      // Let the parent know which chips have been searched for
      searchChips(list) {
        this.$emit('chip_searched', list);
      }
    },
    methods: {
      remove (item) {
        this.searchChips.splice(this.searchChips.indexOf(item), 1)
        this.searchChips = [...this.searchChips]
      },
    },
    beforeDestroy () {
      delete this.searchChips;
      delete this.items;
    }
  }
</script>
