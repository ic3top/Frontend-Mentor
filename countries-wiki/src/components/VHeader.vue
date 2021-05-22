<template>
  <Menubar class="header">
    <template #start>
      <h1>Where in the world?</h1>
    </template>

    <template #end>
      <Button @click="toggleTheme"
              :icon="themeIcon"
              label="Theme"
      />
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
  data() {
    return {
      currentTheme: localStorage.getItem('theme') || 'dark',
    };
  },
  methods: {
    toggleTheme() {
      if (this.currentTheme === 'dark') {
        this.setLight();
        this.currentTheme = 'light';
        localStorage.setItem('theme', this.currentTheme);
      } else {
        this.setDark();
        this.currentTheme = 'dark';
        localStorage.setItem('theme', this.currentTheme);
      }
    },
    setLight() {
      const root = document.documentElement;
      root.style.setProperty('--surface-200', '#FAFAFA');
      root.style.setProperty('--surface-100', '#FFFFFF');
      root.style.setProperty('--text-color', '#333333');
      root.style.setProperty('--border-color', '#3e3e3e');
    },
    setDark() {
      const root = document.documentElement;
      root.style.setProperty('--surface-200', '#242424');
      root.style.setProperty('--surface-100', '#1e1e1e');
      root.style.setProperty('--text-color', 'rgba(255, 255, 255, 0.87)');
      root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.3)');
    },
  },
  computed: {
    themeIcon() {
      return this.currentTheme === 'light' ? 'pi pi-moon' : 'pi pi-sun';
    },
  },
  mounted() {
    if (this.currentTheme === 'light') {
      this.setLight();
    }
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

.header {
  position: fixed;
  top: 0px;
  z-index: 1000;
  width: 100%;
  background-color: var(--surface-200);
  color: var(--text-color);
}
</style>
