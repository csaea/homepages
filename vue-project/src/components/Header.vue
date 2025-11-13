<template>
  <header>
    <img src="/logo.svg" alt="CSAEA Logo" class="logo" />
    <h1>Our Home Pages</h1>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  padding: 2rem 1rem; /* some breathing room */
  text-align: center;
}

/* Make logo scale with viewport but cap its maximum width */
.logo {
  width: 100%;
  max-width: 1000px;
  height: auto;
  display: block;
  margin: 0 auto 0.5rem auto; /* bottom margin scales with content */
}

/* Heading scales with viewport width for responsiveness */
h1 {
  font-size: clamp(1.8rem, 5vw, 3rem); /* min 1.8rem, max 3rem, scales in between */
  margin-bottom: 3rem;
  line-height: 1.2;
}
</style>
