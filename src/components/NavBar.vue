<template>
  <nav class="navbar is-transparent">
    <div class="level">
      <div class="level-item has-text-centered">
          <div class="navbar-menu is-active">
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
      <div class="level-item has-text-centered">
        <div id="navbar-logo">
          <SiteSwitch></SiteSwitch>
        </div>
      </div>
      <div class="level-item has-text-centered">
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
  /*font-size: 20px;*/
  z-index: 9999;
}

.navbar-link {
  margin-left: 1vw;
}

.navbar-item {
  margin-right: 1vw;
}

.level-item {
  width: 33.33vw;
}



@media screen and (max-width:1023px) {
  #navbar-container {
    background-color: white;
    margin-bottom: 2em;
  }

  .navbar {
    margin: 0 0;
    min-height: 15vh;
  }

  a.navbar-link.menu {
    display: none;
  }

  .field.is-grouped {
    margin: 2vh 12vw;
  }

  .level-item {
    width: 100vw;
  }

  .navbar-menu {
    display: flex;
    flex-direction: row;
    width: 100vw;
  }

  .navbar-item {
    font-weight: bold;
    border-radius: 10px;
    flex-basis: 33.33%;
    margin-right: 0em;
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

  a.navbar-link.menu {
    display: none;
  }

  .field.is-grouped {
    margin: 2vh 12vw;
  }

  .level-item {
    width: 100vw;
  }

  .navbar-menu {
    display: flex;
    flex-direction: row;
    width: 100vw;
  }

  .navbar-item {
    font-weight: bold;
    border-radius: 10px;
    flex-basis: 33.33%;
    margin-right: 0em;
  }
}

@media screen and (max-width:360px) {
  #navbar-container {
    background-color: white;
    margin-bottom: 2em;
  }

  .navbar {
    margin: 0 0;
    min-height: 30vh;
  }

  .navbar-dropdown {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  a.navbar-link.menu {
    display: none;
  }

  .level-item {
    width: 100vw;
  }

  .navbar-menu {
    display: flex;
    flex-direction: row;
    width: 100vw;
  }

  .navbar-item {
    font-weight: bold;
    border-radius: 10px;
    flex-basis: 33.33%;
    margin-right: 0em;
  }
}

</style>
