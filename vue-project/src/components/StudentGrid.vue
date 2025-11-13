<template>
  <main class="grid-wrapper">
    <div class="grid">
      <StudentCard
        v-for="student in students"
        :key="student.id"
        :student="student"
      />
    </div>
  </main>
</template>

<script setup>
import StudentCard from './StudentCard.vue'

const students = [
  { id: 1, name: 'Avery', project: 'AI Chess Engine', image: 'https://placekitten.com/200/200', link: '/avery.html' },
  { id: 2, name: 'Jordan', project: 'Portfolio Website', image: 'https://placekitten.com/201/200', link: '/jordan.html' },
  { id: 3, name: 'Sam', project: '3D Printed Drone', image: 'https://placekitten.com/202/200', link: '/sam.html' },
  { id: 4, name: 'Taylor', project: 'Weather Tracker', image: 'https://placekitten.com/203/200', link: '/taylor.html' }
]
</script>

<style scoped>
.grid-wrapper {
  padding: 0 20px 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: center; /* centers the grid */
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 180px)); /* fixed card width */
  gap: 20px;
  max-width: 1200px; /* grid will never exceed this width */
}
</style>
