<template>
  <div class="project-view homerun">
    <!-- <img class="project-view-pic" src="../../../assets/images/homerun.jpg" alt="Project Homerun"> -->
    <div class="project-text">
      <span> During 4 months I have worked as a junior developer on the platform of <a href="https://www.homerun.co" class="project-link"> Homerun </a>. Under supervision they learned
         me the ropes on HTML5, CSS3, Javascript, mysql and javascript libraries within a large web application. The main focus was transforming the main framework (Angular 1.X) into  the newest version of Vue.js.
         It was refactoring a lot of excisting code into the new framework.
      </span>
      <ul>
        <i class="devicon-javascript-plain icon"></i>
        <i class="devicon-html5-plain icon"></i>
        <i class="devicon-sass-plain icon"></i>
        <i class="devicon-vuejs-plain icon"></i>
        <i class="devicon-angularjs-plain icon"></i>
        <i class="devicon-laravel-plain icon"></i>
      </ul>
    </div>
  </div>
</template>

<script>

import './project-styles.scss'
export default {
  name: 'Homerun'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.homerun {
  top:4em !important;
  height: 40em !important;
}

@media screen and (max-width:1280px) {
  .project-view {
    position: relative;
    margin-left: 5em;
    top: 5em;
    display: block;
    flex: 1;
    max-width: 40em;
    max-height: 20em;
  }
  .project-view-pic {
    max-width: 38em;
  }
}

@media screen and (max-width:1024px) {
  .dev-container {
    max-width: 100%;
    height: 70em;
  }

  .project-flex {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-flow: row;
    flex-wrap: wrap;
  }

  .project-intro {
    width: 100%;
  }

  .project-intro h1 & p {
    width: 100%
  }

  .dev-projects {
    display: block;
    /*max-width: 100vh;
    max-height: 40vh;*/
    width: 100%;
    margin-left: 0em;
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .dev-project {
    flex: 1;
    width: 100%;
    height: 20%;
    margin-bottom: 9em;
    /*background-color: #d0772b;*/
  }

  .project-view {
    display: block;
  }

  .project-pic {
    width: 100%;
  }
}

@media screen and (max-width:480px) {
  .project-intro {
    width: 100vw;
    margin-bottom: 0em;
  }

  .dev-container {
    max-width: 100%;
    min-height: 70em;
  }

  .dev-projects {
    margin-top: 10em;
    display: block;
    width: 100%;
    max-width: 90vh;
    max-height: 40vh;
    margin-left: 0em;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .dev-project {
    flex: 1;
    width: 100vw;
    height: 40vh;
    margin-bottom: 0em;
    /*background-color: #d0772b;*/
  }

  .project-view {
    display: none;
  }

  .project-pic {
    width: 90vw;
  }
}

</style>
