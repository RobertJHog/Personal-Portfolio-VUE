<template>
  <div class="footer-container">
    <div class="icon-container">
      <i><a target="_blank" href="https://www.github.com" class="fa fa-github" aria-hidden="true"></a></i>
      <i><a target="_blank" href="https://www.linkedin.com/in/robert-jan-hogerbrugge-38ab3a9/" class="fa fa-linkedin" aria-hidden="true"> </a></i>
      <!-- <i class="fa fa-envelope-o" aria-hidden="true"></i> -->
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

.footer-container {
  height:8.5em;
  position: sticky;
  max-width: 100%;
}

.icon-container {
  position: relative;
  width: 40em;
  top: 3em;
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

/*@media screen and (min-width:768px) and (max-width:1024px) {
  .footer-container {
    max-width: 100%;
  }
}*/

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
