<template>
  <div class="p-grid">
    <div class="p-lg-6 p-col-12 p-d-flex p-jc-center">
      <Skeleton width="100%" height="100%" style="min-height: 20rem"></Skeleton>
    </div>
    <div class="p-lg-6 p-col-12 p-grid">
      <h3 class="p-col-12 p-my-2">General info:</h3>
      <div class="p-sm-5 p-col-12">
        <ul class="p-reset">
          <li>
            <Skeleton width="100%" height="1.5rem"></Skeleton>
          </li>
          <li class="p-mt-4">
            <Skeleton width="100%" height="1.5rem"></Skeleton>
          </li>
          <li class="p-mt-4">
            <Skeleton width="100%" height="1.5rem"></Skeleton>
          </li>
          <li class="p-mt-4">
            <Skeleton width="100%" height="1.5rem"></Skeleton>
          </li>
          <li class="p-mt-4">
            <Skeleton width="100%" height="1.5rem"></Skeleton>
          </li>
        </ul>
      </div>
      <div class="p-sm-6 p-sm-offset-1 p-col-12">
        <ul class="p-reset">
          <li><Skeleton width="100%" height="1.5rem"></Skeleton></li>
          <li class="p-mt-4"><Skeleton width="100%" height="1.5rem"></Skeleton></li>
          <li class="p-mt-4"><Skeleton width="100%" height="1.5rem"></Skeleton></li>
        </ul>
      </div>

      <div class="p-col-12">
        <Skeleton width="100%" height="3rem"></Skeleton>
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from 'primevue/skeleton';

export default {
  name: 'DetailsCountrySkl',
  components: {
    Skeleton,
  },
};
</script>

<style scoped>

</style>
