<template>
  <Dialog :visible="display"
          :breakpoints="{'640px': '100vw'}"
          :style="{width: '60vw'}"
          :closable="false"
          :maximizable="true"
          :modal="true"
          @maximize="detailsMaximized"
  >
    <template #header>
      <h2>{{ details.name }}</h2>
    </template>

    <div class="p-grid">
      <div class="p-col-6 p-d-flex p-jc-center">
        <img :src="details.flag" alt="Country flag" style="height: 12rem">
      </div>
      <div class="p-col-6 p-grid">
        <div class="p-col-5">
          <ul class="p-reset">
            <li><b>Native name:</b> {{ details.nativeName }}</li>
            <li class="p-mt-4 p-text-capitalize"><b>Population:</b> {{ details.population }}</li>
            <li class="p-mt-4 p-text-capitalize"><b>Region:</b> {{ details.region }}</li>
            <li class="p-mt-4 p-text-capitalize"><b>Sub Region:</b> {{ details.subregion }}</li>
            <li class="p-mt-4 p-text-capitalize"><b>Capital:</b> {{ details.capital }}</li>
          </ul>
        </div>
        <div class="p-col-6 p-offset-1">
          <ul class="p-reset">
            <li><b>Top Level Domain:</b> {{ details.topLevelDomain[0] }}</li>
            <li class="p-mt-4"><b>Currencies:</b> {{ currencies }}</li>
            <li class="p-mt-4"><b>Languages:</b> {{ language }}</li>
          </ul>
        </div>
      </div>
    </div>

    <template #footer>
      <Button @click="$emit('close')"
              @keyup.esc="$emit('close')"
              label="Back"
              icon="pi pi-arrow-left"
              autofocus
      />
    </template>
  </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

export default {
  name: 'DetailsCountry',
  props: {
    display: {
      type: Boolean,
      required: true,
    },
    // TODO: handle undefined type
    details: {
      type: Object,
      required: true,
    },
  },
  emits: ['close'],
  components: {
    Dialog,
    Button,
  },
  computed: {
    language() {
      return `${this.details.languages[0].nativeName} (${this.details.languages[0].name})`;
    },
    currencies() {
      return `${this.details.currencies[0].symbol} ${this.details.currencies[0].name}`;
    },
  },
  methods: {
    detailsMaximized() {
      // eslint-disable-next-line no-console
      console.log('Maximized...');
    },
  },
};
</script>

<style scoped>

</style>
