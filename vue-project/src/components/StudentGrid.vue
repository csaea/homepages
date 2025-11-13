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
  { id: 1, name: 'Avery', grade: 'Senior', image: 'placehold_img.png', link: '/avery.html' },
  { id: 2, name: 'Jordan', grade: 'Junior', image: 'placehold_img.png', link: '/jordan.html' },
  { id: 3, name: 'Sam', grade: 'Sophomore', image: 'placehold_img.png', link: '/sam.html' },
  { id: 4, name: 'Taylor', grade: 'Freshman', image: 'placehold_img.png', link: '/taylor.html' },
  { id: 5, name: 'Riley', grade: 'Senior', image: 'placehold_img.png', link: '/riley.html' },
  { id: 6, name: 'Casey', grade: 'Junior', image: 'placehold_img.png', link: '/casey.html' },
  { id: 7, name: 'Jamie', grade: 'Sophomore', image: 'placehold_img.png', link: '/jamie.html' },
  { id: 8, name: 'Morgan', grade: 'Freshman', image: 'placehold_img.png', link: '/morgan.html' },
  { id: 9, name: 'Alex', grade: 'Senior', image: 'placehold_img.png', link: '/alex.html' },
  { id: 10, name: 'Charlie', grade: 'Junior', image: 'placehold_img.png', link: '/charlie.html' },
  { id: 11, name: 'Dakota', grade: 'Sophomore', image: 'placehold_img.png', link: '/dakota.html' },
  { id: 12, name: 'Emerson', grade: 'Freshman', image: 'placehold_img.png', link: '/emerson.html' },
  { id: 13, name: 'Finley', grade: 'Senior', image: 'placehold_img.png', link: '/finley.html' },
  { id: 14, name: 'Harper', grade: 'Junior', image: 'placehold_img.png', link: '/harper.html' },
  { id: 15, name: 'Jordan2', grade: 'Sophomore', image: 'placehold_img.png', link: '/jordan2.html' },
  { id: 16, name: 'Kai', grade: 'Freshman', image: 'placehold_img.png', link: '/kai.html' },
  { id: 17, name: 'Logan', grade: 'Senior', image: 'placehold_img.png', link: '/logan.html' },
  { id: 18, name: 'Morgan2', grade: 'Junior', image: 'placehold_img.png', link: '/morgan2.html' },
  { id: 19, name: 'Peyton', grade: 'Sophomore', image: 'placehold_img.png', link: '/peyton.html' },
  { id: 20, name: 'Quinn', grade: 'Freshman', image: 'placehold_img.png', link: '/quinn.html' },
  { id: 21, name: 'Reese', grade: 'Senior', image: 'placehold_img.png', link: '/reese.html' },
  { id: 22, name: 'Skyler', grade: 'Junior', image: 'placehold_img.png', link: '/skyler.html' },
  { id: 23, name: 'Tatum', grade: 'Sophomore', image: 'placehold_img.png', link: '/tatum.html' },
  { id: 24, name: 'Vivian', grade: 'Freshman', image: 'placehold_img.png', link: '/vivian.html' },
  { id: 25, name: 'Wyatt', grade: 'Senior', image: 'placehold_img.png', link: '/wyatt.html' }
];


</script>

<style scoped>
.grid-wrapper {
  display: flex;
  justify-content: center; /* center the grid container */
  padding: 0 20px 40px;
  box-sizing: border-box;
  margin: 0 auto 1em auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); 
  gap: 20px;
  max-width: 1200px;
  width: 100%;
}



</style>
