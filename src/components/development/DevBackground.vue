<template>
  <div class="background-container">
    <img class="background-image" src="../../assets/images/cool-cat.jpg" alt="Vue logo">
  </div>
</template>

<script>
export default {
  name: 'DevBackground'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.background-container {
  position: relative;
  float: right;
  right: -20em;
  bottom: 29.85em;
  height: 64.5em;
  z-index: 0;
  border: 2px solid #5C5857;
}

.background-image {
  height:64.25em;
  /*-webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -o-filter: blur(2px);
  -ms-filter: blur(2px);
  filter: blur(2px);*/
  opacity: .75;
}

</style>
