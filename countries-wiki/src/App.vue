<template>
  <v-header class="p-shadow-10"></v-header>
  <div class="container custom-mt">
    <div class="p-grid">
      <div class="p-col-6">
        <search-input @input="searchPerQuery"
                      @select-item="showDetails"
                      :filtered-countries="filteredCountries"
        />
      </div>
      <div class="p-offset-3 p-col-3">
        <region-dropdown @select="changeRegion"/>
      </div>
    </div>
    <cards-container :all-countries="countriesList" @cardClicked="showDetails" />
  </div>

  <details-country :display="displayDetails" :details="details[0]" @close="closeDetails" />
</template>

<script>
import VHeader from './components/VHeader.vue';
import SearchInput from './components/SearchInput.vue';
import RegionDropdown from './components/RegionDropdown.vue';
import CardsContainer from './components/CardsContainer.vue';
import DetailsCountry from './components/DetailsCountry.vue';
import Api from './services/Api';

export default {
  name: 'App',
  data() {
    return {
      countriesList: [],
      filteredCountries: [],
      details: [],
      displayDetails: false,
    };
  },
  components: {
    VHeader,
    SearchInput,
    RegionDropdown,
    CardsContainer,
    DetailsCountry,
  },
  methods: {
    async searchPerQuery(query) {
      const data = await Api.searchPerQuery(query);
      this.filteredCountries = data.filter(({ name }) => name
        .toLowerCase()
        .startsWith(query.toLowerCase()));
    },
    async changeRegion(regionName) {
      if (regionName === 'All') {
        this.countriesList = await Api.getAllCountries();
        return;
      }
      this.countriesList = await Api.getCountriesByRegion(regionName);
    },
    showDetails(name) {
      Api.getDetailsByName(name)
        .then((data) => {
          this.details = data;
        })
        .then(() => {
          this.displayDetails = true;
        });
    },
    closeDetails() {
      this.displayDetails = false;
    },
  },
  async mounted() {
    this.countriesList = await Api.getAllCountries();
  },
};
</script>

<style>
:root {
  --border-color: rgba(255, 255, 255, 0.3);
}

html {
  font-size: 16px;
}

body {
  background-color: var(--surface-200);
}

#app {
  font-family: var(--font-family);
  color: var(--text-color);
  min-height: 100vh;
}
.container {
  width: 1440px;
  margin: 0 auto;
}

.custom-mt {
  margin-top: 100px;
}
</style>
