<template>
  <div class="powered-vue">
    <span> Powered by: </span>
    <img class="vue-logo" src="../assets/logo.png" alt="Vue logo">
  </div>
</template>

<script>
export default {
  name: 'VuePower'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.powered-vue {
  position: relative;
  display: inline-block;
  width: 20em;
  bottom: 1em;
  margin-left: 120em;
}

.powered-vue span {
  color: white;
  font-size: 14px;
  font-weight: bolder;
}

.vue-logo {
  height: 4em;
}

@media screen and (max-width:1680px) {
  .powered-vue {
    position: relative;
    margin-left: 55em;
    display: inline-block;
    top: 0em;
  }
}

@media screen and (max-width:1280px) {
  .powered-vue {
    margin-left: 35em;
    max-width: 40%;
    top: -1.5em;
  }
}


@media screen and (max-width:980px) {
  .powered-vue {
    margin-left: 30em;
    max-width: 40%;
  }
}

@media screen and (max-width:736px) {
  .powered-vue {
    position: relative;
    margin-left: -105em;
    display: inline-block;
    width: 40%;
    top: -2em;
  }

  .powered-vue span {
    color: white;
    font-size: 14px;
    font-weight: bolder;
  }

  .vue-logo {
    height: 4em;
  }
}

@media screen and (max-width:480px) {

}

@media screen and (max-width:320px) {
  .powered-vue {
    width: 40%;
  }

  .powered-vue span {
    font-size: 8px;
  }
}


</style>
