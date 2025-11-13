<template>
  <div class="app">
    <header class="header">
      <img src="/logo.svg" alt="Logo" class="logo" />
      <h1>Student Showcase</h1>
    </header>

    <main class="grid-wrapper">
  <div class="grid">
    <div v-for="student in students" :key="student.id" class="student-card">
      <img :src="student.image" alt="student photo" class="student-photo" />
      <h2>{{ student.name }}</h2>
      <p>{{ student.project }}</p>
    </div>
  </div>
</main>

  </div>
</template>

<script setup>
const students = [
  { id: 1, name: 'Avery', project: 'AI Chess Engine', image: 'https://placekitten.com/200/200' },
  { id: 2, name: 'Jordan', project: 'Portfolio Website', image: 'https://placekitten.com/201/200' },
  { id: 3, name: 'Sam', project: '3D Printed Drone', image: 'https://placekitten.com/202/200' },
  { id: 4, name: 'Taylor', project: 'Weather Tracker', image: 'https://placekitten.com/203/200' }
];
</script>

<style scoped>
.app {
  text-align: center;
  font-family: system-ui, sans-serif;
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto; /* centers the whole content */
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  width: 700px;
  height: auto;
  margin-bottom: 0.5rem;
}

.grid-wrapper {
  display: flex;
  justify-content: center; /* centers the grid container */
  padding: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  width: 100%;           /* make sure grid always spans full wrapper width */
  justify-items: center;  /* center cards inside grid cells */
}


.student-card {
  background: #f5f5f5;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 250px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.student-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.student-photo {
  width: 100%;
  border-radius: 0.75rem;
  margin-bottom: 0.5rem;
}
</style>

