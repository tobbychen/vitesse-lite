<script setup lang="ts">
let isDark = ref(true);
const toggleDark = () => {
  isDark.value = !isDark.value;
}
defineExpose({ isDark });
</script>

<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <button @click="toggleDark()">
      <div>{{ isDark ? '日' : '夜' }}</div>
    </button>
  </nav>
</template>
