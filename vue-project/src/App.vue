<script setup>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import StudentGrid from './components/StudentGrid.vue'
import Footer from './components/Footer.vue'
import { students } from './data/students.js'
import { ref, computed, onMounted } from 'vue'

const query = ref('')

// Shuffle function (Fisher–Yates)
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

// Filtered list based on search
const filteredStudents = computed(() => {
  const q = query.value.toLowerCase()
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
