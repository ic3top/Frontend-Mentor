<template>
  <Dialog :visible="display"
          :breakpoints="{'768px': '95vw'}"
          :style="{width: '70vw'}"
          :closable="false"
          :maximizable="true"
          :modal="true"
          @maximize="detailsMaximized"
  >
    <template v-if="Object.values(details).length > 0" #header>
      <h2>{{ details.name }}</h2>
    </template>
    <template v-else #header>
      <h2><Skeleton width="12rem" height="2rem"></Skeleton></h2>
    </template>

    <div class="p-grid" v-if="Object.values(details).length > 0">
      <div class="p-lg-6 p-col-12 p-d-flex p-jc-center">
        <img :src="details.flag" alt="Country flag" style="max-width: 100%">
      </div>
      <div class="p-lg-6 p-col-12 p-grid">
        <h3 class="p-col-12 p-my-2">General info:</h3>
        <div class="p-md-6">
          <ul class="p-reset">
            <li><b>Native name:</b> {{ details.nativeName }}</li>
            <li class="p-mt-4 p-text-capitalize">
              <b>Population:</b> {{ separateNumber(details.population) }}
            </li>
            <li class="p-mt-4 p-text-capitalize"><b>Region:</b> {{ details.region }}</li>
            <li class="p-mt-4 p-text-capitalize">
              <b>Sub Region:</b> {{ details.subregion || 'Undefined' }}
            </li>
            <li class="p-mt-4 p-text-capitalize">
              <b>Capital:</b> {{ details.capital || 'Undefined' }}
            </li>
          </ul>
        </div>
        <div class="p-md-6">
          <ul class="p-reset">
            <li><b>Top Level Domain:</b> {{ details.topLevelDomain[0] }}</li>
            <li class="p-mt-4"><b>Currencies:</b> {{ currencies }}</li>
            <li class="p-mt-4"><b>Languages:</b> {{ language }}</li>
          </ul>
        </div>

        <div class="p-col-12" v-if="details.borders.length > 0">
          <h3 class="p-my-2">Borders:</h3>
          <Button v-for="name in details.borders"
                  :key="name"
                  :label="name"
                  class="p-button-raised p-button-text p-ml-3 p-mt-1"
                  @click="$emit('borderButtonClick', name)"
          ></Button>
        </div>
      </div>
    </div>

    <details-country-skl v-else />

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
import Skeleton from 'primevue/skeleton';
import separateNumber from '../services/separateNumber';
import DetailsCountrySkl from './skeletons/DetailsCountrySkl.vue';

export default {
  name: 'DetailsCountry',
  props: {
    display: {
      type: Boolean,
      default: false,
    },
    details: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  emits: ['close', 'borderButtonClick'],
  components: {
    Dialog,
    Button,
    DetailsCountrySkl,
    Skeleton,
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
    separateNumber,
    detailsMaximized() {
      // eslint-disable-next-line no-console
      console.log('Maximized...');
    },
  },
};
</script>

<style>
.p-dialog-header {
  background-color: var(--surface-200)!important;
  color: var(--text-color)!important;
}

.p-dialog-content {
  background-color: var(--surface-200)!important;
  color: var(--text-color)!important;
}

.p-dialog-footer {
  background-color: var(--surface-200)!important;
  color: var(--text-color)!important;
}

.p-dialog-header-icon {
  color: var(--text-color)!important;
}
</style>
