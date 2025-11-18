<script setup>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import StudentGrid from './components/StudentGrid.vue'
import Footer from './components/Footer.vue'
import { students } from './data/students.js'
import { ref, computed, onMounted } from 'vue'

const query = ref('')

function shuffle(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffledStudents = ref([])

// Shuffle once on mount
onMounted(() => {
  shuffledStudents.value = shuffle(students)
})

// search
const gradeMap = {
  'freshme': 'freshman',
  'freshmen': 'freshman',
  '9': 'freshman',
  'sophomores': 'sophomore',
  '10': 'sophomore',
  'juniors': 'junior',
  '11': 'junior',
  'jr': 'junior',
  'jr.': 'junior',
  'seniors': 'senior',
  'sr': 'senior',
  'sr.': 'senior',
  '12': 'senior'
}

const filteredStudents = computed(() => {
  let q = query.value.toLowerCase()
  // map numbers to grade names for search

  if (gradeMap[q]) q = gradeMap[q]
 
  if (!q) return shuffledStudents.value

  return shuffledStudents.value.filter(
    s =>
      s.name.toLowerCase().includes(q) ||
      s.grade.toLowerCase().includes(q) ||
      s.hexcode.toLowerCase().includes(q)
  )
})

</script>

<template>
  <div class="app">
    <Header />

    <Search v-model="query" />

    <StudentGrid :students="filteredStudents" />

    <Footer/>
  </div>
</template>
