<template>
  <div class="background">
  </div>
</template>

<script>

export default {
  name: 'Background'
}
</script>

<style lang="scss">

html {
  background-color: #0E0B16;
}

html, body{
  height: 100%;
}

div, body{
  margin: 0;
  padding: 0;
  font-family: exo, sans-serif;
}

body {
	background-image: url(../../static/images/intropicreversed.jpg);
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	background-color: #999;
}

.background {
  z-index: -9999;
}

</style>
