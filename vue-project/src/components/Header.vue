<template>
  <header>
    <a href="https://csaea.hcvsd.org/" target="_blank" ><img src="/logo.png" alt="CSAEA Logo" class="logo" /></a>
    <div class="title-wrapper">
      <h1>CSAEA Web of Pages</h1>
      <br/>
      <h3>HTML/CSS/JS projects ~ 90s style.</h3>
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

h3 {
  font-family: "Courier New", monospace;
  font-size: 1.4em;
  font-weight: 700;
  color: #000;
  background-color: rgba(255, 255, 255, 0.5);
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  text-shadow:
    2px 2px 0 rgba(0, 255, 128, 0.7);
  letter-spacing: 1px;
  transform: skew(-3deg) rotate(-0.5deg);
  margin-top: 8px;
}

.title-wrapper {
  text-align: center;
}





</style>
