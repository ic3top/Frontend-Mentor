<template>
    <div class="p-fluid">
      <AutoComplete v-model="selectedCountry"
                    :suggestions="filteredCountries"
                    @complete="filterCountries($event)"
                    @item-select="selectCountry($event)"
                    field="name"
                    :delay="300"
                    placeholder="Search for a country..."
      />
    </div>
</template>

<script>
import AutoComplete from 'primevue/autocomplete';

export default {
  name: 'SearchInput',
  props: {
    filteredCountries: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['input', 'selectItem'],
  components: {
    AutoComplete,
  },
  data() {
    return {
      selectedCountry: '',
    };
  },
  // https://restcountries.eu/rest/v2/name/an?fields=name;
  methods: {
    filterCountries(e) {
      this.$emit('input', e.query);
    },
    selectCountry({ value: { name } }) {
      this.$emit('selectItem', name);
      this.selectedCountry = '';
    },
  },
};
</script>

<style scoped>
.p-input-icon-right {
  display: block;
}
</style>
