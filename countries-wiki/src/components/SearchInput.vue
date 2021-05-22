<template>
    <div class="p-fluid">
      <AutoComplete v-model="selectedCountry"
                    :suggestions="filteredCountries"
                    @complete="filterCountries($event)"
                    @item-select="selectCountry($event)"
                    field="name"
                    :delay="300"
                    placeholder="Search for a country..."
      />
    </div>
</template>

<script>
import AutoComplete from 'primevue/autocomplete';

export default {
  name: 'SearchInput',
  props: {
    filteredCountries: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['input', 'selectItem'],
  components: {
    AutoComplete,
  },
  data() {
    return {
      selectedCountry: '',
    };
  },
  methods: {
    filterCountries(e) {
      this.$emit('input', e.query);
    },
    selectCountry({ value: { name } }) {
      this.$emit('selectItem', name);
      this.selectedCountry = '';
    },
  },
};
</script>

<style scoped>
.p-input-icon-right {
  display: block;
}

::v-deep .p-inputtext {
  background-color: var(--surface-100);
  color: var(--text-color);
  border-color: var(--border-color);
}

::v-deep .p-inputtext::placeholder {
  color: var(--text-color-secondary);
}
</style>
