<template>
  <div class="home">
    <h1>Welcome to My Simple Vue.js Home Page</h1>
  </div>
  <div>
    <div class="mermaid">
      graph TD;
      A-->B;
      B-->C;
      B-->D;
      F-->G;
    </div>
  </div>
</template>
<!-- use mermaid in this file -->
<script>
import Mermaid from 'mermaid';
export default {
  name: 'Home_page',
  mounted() {
    // Initialize Mermaid when the component is mounted
    Mermaid.initialize({
      startOnLoad: true,
    });
    Mermaid.init(); // Initialize Mermaid again to render the diagram
  },
}
</script>

<style scoped>
.home {
  text-align: center;
  margin: 20px;
}

h1 {
  font-size: 24px;
  color: #333;
}

p {
  font-size: 16px;
  color: #666;
}
</style>
