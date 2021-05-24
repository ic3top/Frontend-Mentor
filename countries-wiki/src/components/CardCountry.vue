<template>
  <Card class="p-shadow-4 card"
        @click="cardClicked"
        style="background-color: var(--surface-100); color: var(--text-color)"
  >
    <template #header>
      <div class="p-d-flex p-jc-center">
        <img :src="flag" style="height: 11rem; max-width: 20rem" />
      </div>
    </template>
    <template #title>
      <h2 class="p-reset">{{ name }}</h2>
    </template>
    <template #subtitle>
      {{ capital || 'Undefined' }}
    </template>
    <template #content>
      <ul class="p-reset">
        <li><b>Population:</b> {{ separateNumber(population) }}</li>
        <li><b>Region:</b> {{ region }}</li>
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
    flag: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
  },
  emits: ['cardClick'],
  components: {
    Card,
  },
  methods: {
    separateNumber,
    cardClicked() {
      this.$emit('cardClick', this.name);
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

::v-deep(.p-card-subtitle) {
  color: grey !important;
}
</style>
