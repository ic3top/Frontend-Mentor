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
      <div class="p-lg-offset-3 p-lg-3 p-sm-offset-2 p-sm-4 p-col-6">
        <region-dropdown @select="changeRegion"/>
      </div>
    </div>
    <cards-container :all-countries="countriesList" @cardClick="showDetails" />
  </div>

  <details-country :display="displayDetails"
                   :details="details[0] || {}"
                   @close="closeDetails"
                   @border-button-click="showDetails"
  />
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
      this.countriesList = [];
      if (regionName === 'All') {
        this.countriesList = await Api.getAllCountries();
        return;
      }
      this.countriesList = await Api.getCountriesByRegion(regionName);
    },
    showDetails(name) {
      this.closeDetails();
      this.displayDetails = true;
      Api.getDetailsByName(name)
        .then((data) => {
          this.details = data;
        });
    },
    closeDetails() {
      this.displayDetails = false;
      this.details = [];
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
  --skeleton-bg: rgba(255, 255, 255, 0.06);
  --skeleton-after: linear-gradient(90deg, rgba(255, 255, 255, 0),
                                           rgba(255, 255, 255, 0.04),
                                           rgba(255, 255, 255, 0));
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
  width: 1140px;
  margin: 0 auto;
}

.custom-mt {
  margin-top: 100px;
}

.p-skeleton::after {
  background: var(--skeleton-after) !important;
}

.p-skeleton {
  background-color: var(--skeleton-bg) !important;
}
@media screen and (max-width: 1200px) {
  .container {
    width: 960px;
  }
}

@media screen and (max-width: 992px) {
  .container {
    width: 720px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 540px;
  }

  h1 {
    font-size: 1.4rem;
  }
}

@media screen and (max-width: 576px) {
  .container {
    width: 95%;
  }
}
</style>
