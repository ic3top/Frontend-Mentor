<template>
  <Card class="p-shadow-4 card" @click="cardClicked">
    <template #header>
      <img :src="flag" style="height: 10rem" />
    </template>
    <template #title>
      <h2 class="p-reset">{{ name }}</h2>
    </template>
    <template #subtitle>
      {{ capital || 'Undefined' }}
    </template>
    <template #content>
      <ul class="p-reset">
        <li><b>Population:</b> {{ populationModified }}</li>
        <li><b>Region:</b> {{ region }}</li>
      </ul>
    </template>
  </Card>
</template>

<script>
import Card from 'primevue/card';

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
  emits: ['cardClicked'],
  components: {
    Card,
  },
  computed: {
    populationModified() {
      return this.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  methods: {
    cardClicked() {
      this.$emit('cardClicked', this.name);
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
</style>
