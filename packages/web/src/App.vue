<template>
  <main>
  {{ slogan }}
    <router-view />
    <Footer ref="footer"/>
  </main>
</template>
<script setup lang="ts">
const footer = ref<InstanceType<typeof Footer>>();
let slogan = computed(() => footer.value?.isDark ? '白' : '夜');
</script>