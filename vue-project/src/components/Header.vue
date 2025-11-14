<template>
  <header>
    <a href="https://csaea.hcvsd.org/" target="_blank" ><img src="/logo.png" alt="CSAEA Logo" class="logo" /></a>
    <div class="title-wrapper">
      <h1>CSAEA 90s HOMEPAGES</h1>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  padding: 2rem 1rem;
  text-align: center;
}

.logo {
  width: 300px;
  max-width: 1000px;
  height: auto;
  
  margin: 0 auto 2rem auto;
  filter:
    drop-shadow(4px 4px 0 rgba(255, 105, 180, 1))   
    drop-shadow(5px 5px 0 rgba(0, 255, 255, 1))     
    drop-shadow(6px 6px 0 rgba(0, 255, 128, 1));    
}

h1 {
  display: inline-block;
  font-family: "Courier New", monospace;
  font-size: 4em;
  font-weight: 900;
  color: #000;
  background-color: rgba(255, 255, 255, 0.6);

  padding: 0px 12px 0px 12px;        /* smaller vertical padding, keep horizontal for breathing room */
  border-radius: 30px;      /* subtle rounding instead of huge curves */

  text-shadow:
    2px 2px 0 rgba(255, 105, 180, 1),
    4px 4px 0 rgba(0, 255, 255, 1),
    6px 6px 0 rgba(0, 255, 128, 1);

  letter-spacing: 2px;
  transform: skew(-5deg) rotate(-1deg);
}

.title-wrapper {
  text-align: center;
}





</style>
