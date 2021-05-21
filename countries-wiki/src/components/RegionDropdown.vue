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
      regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    };
  },
  methods: {
    regionSelect() {
      this.$emit('select', this.selectedRegion);
    },
  },
};
</script>

<style scoped>

</style>
