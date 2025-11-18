<template>
  <div class="card">
    <a :href="student.link || '#'" target="_blank">
      <img class="preview" :src="student.image" :alt="`${student.name}'s Page`" />
      <h2>{{ student.name }}’s Space </h2>
      <h3 class="emoji"> {{ randomEmoji }} </h3>
    </a>
    <div class="cardinfo">
      <p class="grade">{{ formatGrade(student.grade)}}</p>
      <p class="code">{{ student.hexcode }}</p>
    </div>
  </div>
</template>

<script setup>
import { emojis } from '../data/emojis.js'
  defineProps({
    student: Object
  })
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]

function formatGrade(grade) {
  if (grade.startsWith("F")) {
    return "Fr."
        }  
  else if (grade.startsWith("So")) {
    return "Soph."
  } 
  else if (grade.startsWith("J")) {
    return "Jr."
  }
  else if (grade.startsWith("Se")) {
    return "Sr."
  } 
  else {
    return ""
        }
}

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
  margin: 0 auto;   
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 3px 3px 0 #00ffff;
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

.emoji {
  font-family: IBM Plex Mono, monospace;
  font-size: 1.2rem;   
  text-align: center;       /* center inside the card */
  margin: 22px 0 0 0;        /* spacing around the emoji */
  color: #000000;    
}


.cardinfo {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
}

.grade  {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.8rem;
    background: rgb(247, 247, 247);
  color: #727272;
}

.code {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.8rem;
  background: rgb(247, 247, 247);
  color: #727272;
}

.preview {
  width: 275px;
  height: 183px;
  object-fit: cover;
  object-position: center;
}

</style>
