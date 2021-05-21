<template>
  <div class="p-grid p-mt-6">
    <div v-for="countryObj in allCountries" :key="countryObj.alpha3Code" class="p-mt-5 p-col-3">
     <DeferredContent>
       <card-country
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
  components: {
    CardCountry,
    DeferredContent,
  },
};
</script>

<style scoped>
.p-card {
  padding: 2vh 1vw;
}
</style>
