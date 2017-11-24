<template>
  <div class="home">
    <nav class="navbar is-transparent">
      <div id="navbar-container" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="">
              Menu
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" v-model="component" value="AboutMeDev" v-on:click="emit">
                About me
              </a>
              <a class="navbar-item" v-model="component" value="DevProjects" v-on:click="emit">
                My projects
              </a>
              <a class="navbar-item" v-model="component" value="DevWork" v-on:click="emit">
                My jobs
              </a>
            </div>
          </div>
          <a class="navbar-item" v-on:click="component = 'ContentContainer'">
            Portfolio R.J. Hogerbrugge
          </a>
        </div>

        <div class="navbar-brand">
          <div id="navbar-logo">
            <SiteSwitch></SiteSwitch>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="" target="_blank" href="https://github.com/RobertJHog">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>
                    GitHub
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button contact-us" href="https://www.linkedin.com/in/robert-jan-hogerbrugge-38ab3a9/">
                  <span class="icon">
                    <i class="fa fa-linkedin"></i>
                  </span>
                  <span>Contact Me</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import SiteSwitch from './SiteSwitch'

export default {
  name: 'NavBar',
  data () {
    return {
      msg: 'R.J. Hogerbrugge',
      component: 'AboutMeDev'
    }
  },
  components: {
    SiteSwitch
  },
  methods: {
    emit (value) {
      this.$emit('componentSwitch', value)
      console.log('emit?')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar {
  margin: 0 2em;
  min-height: 10vh;
  background-color: #0E0B16;
  font-size: 20px;
}

</style>
