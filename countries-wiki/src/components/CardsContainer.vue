<template>
  <div class="p-grid">
    <div v-for="countryObj in allCountries" :key="countryObj.alpha3Code" class="p-mt-5 p-col-3">
     <DeferredContent>
       <card-country
         @card-clicked="cardClicked"
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
  emits: ['cardClicked'],
  components: {
    CardCountry,
    DeferredContent,
  },
  methods: {
    cardClicked(name) {
      this.$emit('cardClicked', name);
    },
  },
};
</script>

<style scoped>
.p-card {
  padding: 2vh 1vw;
}
</style>
