<template>
  <Card class="p-shadow-4 card"
        style="background-color: var(--surface-100); color: var(--text-color)"
  >
    <template #header>
      <div class="p-d-flex p-jc-center">
        <Skeleton style="height: 11rem; width: 100%"></Skeleton>
      </div>
    </template>
    <template #title>
      <Skeleton />
    </template>
    <template #subtitle>
      <Skeleton width="5rem"></Skeleton>
    </template>
    <template #content>
      <ul class="p-reset">
        <li><Skeleton width="100%"></Skeleton></li>
        <li><Skeleton width="100%" class="p-mt-2"></Skeleton></li>
      </ul>
    </template>
  </Card>
</template>

<script>
import Skeleton from 'primevue/skeleton';
import Card from 'primevue/card';

export default {
  name: 'CardCountrySkl',
  components: {
    Skeleton,
    Card,
  },
};
</script>

<style scoped>

</style>
