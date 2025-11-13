<template>
  <div class="app">
    <Header />
    <StudentGrid />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import StudentGrid from './components/StudentGrid.vue'
</script>

<style scoped>
body {
  font-family: 'Courier New', monospace;
  background: #fefefa url('/backgrounds/retro-tile.gif');
  color: #111;
  margin: 0;
  text-align: center;
}
</style>
