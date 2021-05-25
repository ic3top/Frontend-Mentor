<template>
  <Card class="p-shadow-4 card"
        @click="cardClicked"
        style="background-color: var(--surface-100); color: var(--text-color)"
  >
    <template #header>
      <div class="p-d-flex p-jc-center">
        <img :src="countryObj['flag']" style="height: 11rem; max-width: 20rem" alt="Country flag" />
      </div>
    </template>
    <template #title>
      <h2 class="p-reset">{{ countryObj.name }}</h2>
    </template>
    <template #subtitle>
      {{ countryObj.capital || 'Undefined' }}
    </template>
    <template #content>
      <ul class="p-reset">
        <li><b>Population:</b> {{ separateNumber(countryObj.population) }}</li>
        <li><b>Region:</b> {{ countryObj.region }}</li>
      </ul>
    </template>
  </Card>
</template>

<script>
import Card from 'primevue/card';
import separateNumber from '../services/separateNumber';

export default {
  name: 'CardCountry',
  props: {
    countryObj: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['cardClick'],
  components: {
    Card,
  },
  methods: {
    separateNumber,
    cardClicked() {
      this.$emit('cardClick', this.countryObj.name);
    },
  },
};
</script>

<style scoped>
.p-shadow-4:hover {
  box-shadow: 0 4px 8px -1px rgb(0 0 0 / 20%),
  0 8px 12px 0 rgb(0 0 0 / 14%),
  0 2px 16px 0 rgb(0 0 0 / 12%);
}

.card {
  cursor: pointer;
}

:deep(.p-card-subtitle) {
  color: grey !important;
}
</style>
