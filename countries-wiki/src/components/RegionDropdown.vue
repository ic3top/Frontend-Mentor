<template>
  <div class="p-fluid">
    <Dropdown v-model="selectedRegion"
              :options="regions"
              placeholder="Select a region"
              @hide="regionSelect"
              scrollHeight="240px"
    />
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';

export default {
  name: 'RegionDropdown',
  emits: ['select'],
  components: {
    Dropdown,
  },
  data() {
    return {
      selectedRegion: null,
      previousRegion: null,
      regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'All'],
    };
  },
  methods: {
    regionSelect() {
      if (this.selectedRegion === this.previousRegion) return;
      this.$emit('select', this.selectedRegion);
      this.previousRegion = this.selectedRegion;
    },
  },
};
</script>

<style scoped>
.p-dropdown {
  background-color: var(--surface-100);
  border: solid 1px;
  border-color: var(--border-color);
}

:deep(.p-inputtext) {
  color: var(--text-color);
}

:deep(.p-dropdown .p-dropdown-label.p-placeholder) {
  color: var(--text-color-secondary);
}

:deep(p-dialog-header) {
  color: var(--text-color);
}

:deep(.p-dropdown .p-dropdown-trigger) {
  color: var(--text-color-secondary);
}
</style>
