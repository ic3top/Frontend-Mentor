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

</style>
