<template>
  <main>
  {{ slogan }}
    <router-view />
    <FooterVue ref="footer"/>
  </main>
</template>
<script setup lang="ts">
import FooterVue from './components/Footer.vue';
const footer = ref<InstanceType<typeof FooterVue>>();
let slogan = computed(() => footer.value?.isDark ? '白' : '夜');
</script>