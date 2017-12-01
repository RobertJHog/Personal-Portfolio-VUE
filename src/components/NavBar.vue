<template>
    <nav class="navbar is-transparent">
      <div id="container" class="navbar-menu is-active">
        <div class="navbar-start">
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
      if (this.$store.getters.currentEnvironment === true) {
        this.$store.dispatch('changeComponent', 'AboutMeSales')
      } else {
        this.$store.dispatch('changeComponent', 'AboutMeDev')
      }
    },
    switchMyProjects () {
      if (this.$store.getters.currentEnvironment === true) {
        this.$store.dispatch('changeComponent', 'SalesProjects')
      } else {
        this.$store.dispatch('changeComponent', 'DevProjects')
      }
    },
    switchMyJobs () {
      if (this.$store.getters.currentEnvironment === true) {
        this.$store.dispatch('changeComponent', 'SalesWork')
      } else {
        this.$store.dispatch('changeComponent', 'DevWork')
      }
    },
    backHome () {
      this.$store.dispatch('changeStartComponent', 'Home')
    }
  }
}
</script>

<style scoped>

.navbar {
  margin: 0 0;
  min-height: 15vh;
  font-size: 20px;
}

.navbar-link {
  margin-left: 1em;
}

.navbar-item {
  margin-right: 1em;
}

@media screen and (max-width:1023px) {
  #container {
    margin-bottom: 2em;
  }

  .navbar {
    margin: 0 0;
    min-height: 30vh;
  }

  .navbar-start {
    margin: 0 auto;
  }

  .navbar-dropdown {
    display: flex;
    flex-direction: row;
  }

  .navbar-link {
    flex: 1;
  }

  .navbar-item {
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
  }

  a.navbar-link.menu {
    display: none;
  }

  .portfolio {
    font-size: 26px;
  }

  .field.is-grouped {
    margin-left: 4em;
  }
}

@media screen and (max-width:480px) {
  #navbar-container {
    background-color: white;
    margin-bottom: 2em;
  }

  .navbar {
    margin: 0 0;
    min-height: 30vh;
  }

  .navbar-start {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
  }

  .navbar-dropdown {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .navbar-link {
    flex: 1;
  }

  .navbar-item {
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    flex: 1;
    margin-right: 0em;
  }

  a.navbar-link.menu {
    display: none;
  }

  .portfolio {
    font-size: 26px;
  }

  .field.is-grouped {
    margin-left: 4em;
  }
}

</style>
