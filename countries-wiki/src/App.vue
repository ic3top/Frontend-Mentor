<template>
  <v-header class="p-shadow-10"></v-header>
  <div class="container p-mt-5">
    <div class="p-grid">
      <div class="p-col-6">
        <search-input @input="searchPerQuery"
                      @select-item="getCountryByName"
                      :filtered-countries="filteredCountries"
        />
      </div>
      <div class="p-offset-3 p-col-3">
        <region-dropdown @select="changeRegion"/>
      </div>
    </div>
    <cards-container :all-countries="countriesList" />
  </div>
</template>

<script>
import VHeader from './components/VHeader.vue';
import SearchInput from './components/SearchInput.vue';
import RegionDropdown from './components/RegionDropdown.vue';
import CardsContainer from './components/CardsContainer.vue';
import Api from './services/Api';

export default {
  name: 'App',
  data() {
    return {
      countriesList: [],
      filteredCountries: [],
    };
  },
  components: {
    VHeader,
    SearchInput,
    RegionDropdown,
    CardsContainer,
  },
  methods: {
    async searchPerQuery(query) {
      const data = await Api.searchPerQuery(query);
      this.filteredCountries = data.filter(({ name }) => name
        .toLowerCase()
        .startsWith(query.toLowerCase()));
    },
    async getCountryByName(name) {
      console.log(await Api.getCountryByName(name));
    },
    async changeRegion(regionName) {
      this.countriesList = await Api.getCountriesByRegion(regionName);
    },
  },
  async mounted() {
    this.countriesList = await Api.getAllCountries();
  },
};
</script>

<style >
html {
  font-size: 16px;
}
#app {
  font-family: var(--font-family);
  color: var(--text-color);
  background-color: var(--surface-200);
  min-height: 100vh;
}
.container {
  width: 1440px;
  margin: 0 auto;
}
</style>
