<template>
  <Menubar>
    <template #start>
      <h1>Where in the world?</h1>
    </template>

    <template #end>
      <Button icon="pi pi-moon p-button-rounded" label="Theme"/>
    </template>
  </Menubar>
</template>

<script>
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';

export default {
  name: 'VHeader',
  components: {
    Menubar,
    Button,
  },
};
</script>

<style scoped>
.p-menubar {
  border-radius: 0;
  border: none;
  padding: 0 10vw;
}

::v-deep .p-menubar-button {
  display: none!important;
}
</style>
