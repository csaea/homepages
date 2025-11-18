<script setup>
import StudentCard from './StudentCard.vue'

defineProps({
  students: {
    type: Array,
    required: true
  }
})


</script>

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


<style scoped>
.grid-wrapper {
  display: flex;
  justify-content: center; 
  padding: 0 20px 40px;
  box-sizing: border-box;
  margin: 0 auto 1em auto;
  min-height: 200px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;
}



</style>
