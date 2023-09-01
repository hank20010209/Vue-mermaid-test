<template>
  <h1>Hello World</h1>
  <p>
    <router-link to="/about">Go to About</router-link><br>
    <router-link to="/">Go to Home</router-link>
  </p>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
