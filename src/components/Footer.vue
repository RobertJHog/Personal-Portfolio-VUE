<template>
  <div id="footer-container">
    <div class="icon-container">
      <i><a target="_blank" href="https://github.com/RobertJHog" class="fa fa-github" aria-hidden="true"></a></i>
      <i><a target="_blank" href="https://www.linkedin.com/in/robert-jan-hogerbrugge-38ab3a9/" class="fa fa-linkedin" aria-hidden="true"> </a></i>
    </div>
    <VuePower></VuePower>
  </div>
</template>

<script>
import VuePower from '@/components/VuePower'
export default {
  name: 'VFooter',
  components: {
    VuePower
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.icon-container {
  position: relative;
  width: 40em;
  top: 1.5em;
  left: 1em;
}

.fa {
  margin-right: 1.5em;
  font-size: 40px;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

@media screen (max-width:1280px) {
  .icon-container {
    margin-bottom: 1em;
  }
}

@media screen (max-width:980px) {
  .icon-container {
    top: 2em;
  }
}

@media screen and (max-width:480px) {
  .footer-container {
    max-width: 100%;
  }
  .nav-bar {
    display: none;
  }
  .footer-container {
    height:6em;
    position: sticky;
  }

  .icon-container {
    position: relative;
    width: 15em;
    top: 1.5em;
    left: 0em;
  }

  .fa {
    margin-right: 1.5em;
    font-size: 40px;
  }

  a {
    text-decoration: none;
    color: #2c3e50;
  }
}



</style>
