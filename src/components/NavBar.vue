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
              <a class="navbar-item" @click="switchAboutMe">
                About me
              </a>
              <a class="navbar-item" @click="switchMyProjects">
                My projects
              </a>
              <a class="navbar-item" @click="switchMyJobs">
                My jobs
              </a>
            </div>
          </div>
          <a class="navbar-item">
            Portfolio R.J. Hogerbrugge
          </a>
        </div>

        <div class="navbar-brand">
          <div id="navbar-logo">
            <SiteSwitch></SiteSwitch>
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
                <a class="button contact-us" href="https://www.linkedin.com/in/robert-jan-hogerbrugge-38ab3a9/" target="_blank">
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
    switchAboutMe () {
      this.$store.dispatch('changeComponent', 'AboutMeDev')
      console.log('component CHANGE AboutMeDev')
    },
    switchMyProjects () {
      this.$store.dispatch('changeComponent', 'DevProjects')
      console.log('component CHANGE dev Projects')
    },
    switchMyJobs () {
      this.$store.dispatch('changeComponent', 'DevWork')
      console.log('component CHANGE dev Work')
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
