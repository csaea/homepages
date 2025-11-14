<template>
  <header>
    <img src="/logo.png" alt="CSAEA Logo" class="logo" />
    <h1>CSAEA 90s Homepages</h1>
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

  /* hard-edged layered shadows for Miami 90s style */
  filter:
    drop-shadow(2px 2px 0 rgba(255, 105, 180, 1))   /* hot pink */
    drop-shadow(4px 4px 0 rgba(0, 255, 255, 1))     /* bright cyan */
    drop-shadow(6px 6px 0 rgba(0, 255, 128, 1));    /* neon green */
}

h1 {
  font-family: "Courier New", monospace;
  font-size: 4em;
  text-transform: uppercase;
  font-weight: 900;
  color: #000;

  /* hard-edged vaporwave layered shadows */
  text-shadow:
    2px 2px 0 rgba(255, 105, 180, 1),   /* hot pink */
    4px 4px 0 rgba(0, 255, 255, 1),     /* bright cyan */
    6px 6px 0 rgba(0, 255, 128, 1);     /* neon green */

  letter-spacing: 2px;
  transform: skew(-5deg) rotate(-1deg);
}
</style>
