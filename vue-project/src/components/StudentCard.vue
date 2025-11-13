<template>
  <div class="card">
    <a :href="student.link || '#'" target="_blank">
      <img :src="student.image" :alt="`${student.name}'s Project`" />
      <h2>{{ student.name }}’s Project</h2>
    </a>
    <p class="grade">{{ student.project }}</p>
  </div>
</template>

<script setup>
defineProps({
  student: Object
})
</script>

<style scoped>
.card {
  background: #fff;
  border: 3px solid #000;
  box-shadow: 3px 3px 0 #ff00ff;
  padding: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  max-width: 250px;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 4px 4px 0 #00ffff;
}

.card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border: 2px solid #000;
}

.card h2 {
  font-size: 1rem;
  margin: 8px 0 4px;
  color: #0033cc;
}

.grade {
  font-size: 0.9rem;
  color: #555;
}
</style>
