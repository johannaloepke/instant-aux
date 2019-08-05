<template>
 <v-layout row wrap align-center>
    <v-switch 
      v-model="disabled" 
        class="ma-2" 
      />
    <v-slider
      v-model="attribute"
      :append-icon="appendIcon"
      :prepend-icon="prependIcon"
      :min="min"
      :max="max"
      thumb-label="always"
      :disabled="disabled"
      :label="label"
      />
 </v-layout>
</template>

<script>
import { POINT_CONVERSION_COMPRESSED } from 'constants';
export default {
  data: () => ({
    attribute: null,
    min: 0,
    max: 100,
    disabled: true
  }),
  props: {
    appendIcon: null,
    prependIcon: null,
    label: ''
  },
  watch: {
    // Let the parent know what value an attribute has
    attribute(value) {
      this.$emit('attribute_value', value);
    },
    disabled() {
      if (this.disabled) {
        this.value = null;
        this.$emit('attribute_value', this.value);
      }
      else {
        this.value = 0;
        this.$emit('attribute_value', this.value);
      }
    }
  }
};
</script>
