<template>
  <div class="p-grid">
    <div v-for="countryObj in allCountries"
         :key="countryObj.alpha3Code"
         class="p-mt-5 p-xl-3 p-lg-4 p-sm-6 p-col-12"
    >
     <DeferredContent>
       <card-country
         @card-click="cardClick"
         :flag="countryObj.flag"
         :capital="countryObj.capital"
         :name="countryObj.name"
         :region="countryObj.region"
         :population="countryObj.population"
       />
     </DeferredContent>
    </div>
  </div>
</template>

<script>
import DeferredContent from 'primevue/deferredcontent';
import CardCountry from './CardCountry.vue';

export default {
  name: 'CardsContainer',
  props: {
    allCountries: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['cardClick'],
  components: {
    CardCountry,
    DeferredContent,
  },
  methods: {
    cardClick(name) {
      this.$emit('cardClick', name);
    },
  },
};
</script>

<style scoped>
.p-card {
  padding: 2vh 1vw;
}
</style>
