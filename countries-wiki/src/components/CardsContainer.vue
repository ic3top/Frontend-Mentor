<template>
  <div class="p-grid" v-if="allCountries.length > 0">
    <div v-for="countryObj in allCountries"
         :key="countryObj.alpha3Code"
         class="p-mt-5 p-xl-3 p-lg-4 p-sm-6 p-col-12"
    >
     <DeferredContent style="height: 100%">
       <card-country
         @card-click="cardClick"
         :countryObj="countryObj"
       />
     </DeferredContent>
    </div>
  </div>
  <div class="p-grid" v-else>
    <div v-for="i in 8"
         :key="i"
         class="p-mt-5 p-xl-3 p-lg-4 p-sm-6 p-col-12"
    >
      <card-country-skl />
    </div>
  </div>
</template>

<script>
import DeferredContent from 'primevue/deferredcontent';
import CardCountry from './CardCountry.vue';
import CardCountrySkl from './skeletons/CardCountrySkl.vue';

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
    CardCountrySkl,
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
