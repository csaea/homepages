<template>
  <header>
    <img src="/logo.png" alt="CSAEA Logo" class="logo" />
    <h1>CSAEA Old Web Homepages</h1>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  padding: 2rem 1rem;
  text-align: center;
}

.logo {
  width: 300px;
  max-width: 1000px;
  height: auto;
  display: block;
  margin: 0 auto 2rem auto;
}

h1 {
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: clamp(2.5rem, 6vw, 5rem);
  text-transform: uppercase;
  color: #00ffff;
  text-shadow:
    2px 2px 0 #ff00ff,
    4px 4px 0 #ffff00,
    6px 6px 0 #00ff00;
  

  -webkit-text-fill-color: transparent;
  animation: neonShift 3s infinite linear;
  letter-spacing: 1px;
  transform: skew(-5deg) rotate(-1deg);
}

@keyframes neonShift {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 100% 50%;
  }
}




</style>
