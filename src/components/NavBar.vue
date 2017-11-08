<template>
  <div class="nav-bar">
    <h2 class="nav-bar-item">About me</h2>
    <h2 class="nav-bar-item">Skills</h2>
    <h2 class="nav-bar-item"> Projects </h2>
    <h2 class="nav-bar-item"> Work experience </h2>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

.nav-bar {
  position: absolute;
  margin-left: 4em;
  margin-top: 15em;
}

.nav-bar-item {
  padding-bottom: 2em;
  font-weight: bold;
}
</style>
