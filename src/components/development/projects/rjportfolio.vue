<template>
  <div class="project-view rjhportfolio">
    <!-- <img class="project-view-pic" src="../../../assets/images/rjhportfolio.jpg" alt="Personal Portfolio"> -->
    <div class="project-text">
      <span> Using the Vue.js framework I have built my own portfolio site from the ground up.
        Going in my idea was to make a responsive single page application that feels like a menu.
        Unless on mobile there is no scrolling required.
      </span>
      <ul>
        <i class="devicon-vuejs-plain icon"></i>
        <i class="devicon-html5-plain icon"></i>
        <i class="devicon-sass-plain icon"></i>
      </ul>
    </div>
  </div>
</template>

<script>

import './project-styles.scss'
export default {
  name: 'Rjportfolio'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.rjhportfolio {
  top:29.25em !important;
  height: 13em !important;
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
