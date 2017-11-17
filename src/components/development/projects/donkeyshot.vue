<template>
  <div class="project-view donkeyshot">
    <!-- <img class="project-view-pic" src="../../../assets/images/donkeyshot.jpg" alt="DonkeyShot website"> -->
    <div class="project-text">
      <span> For a former sales client I have built a company <a href="http://www.donkeyshot.nl" class="project-link">website</a> based on his preferences.
        I have used a HTML5up template as a starting point.
      </span>
      <ul>
        <i class="devicon-javascript-plain icon"></i>
        <i class="devicon-html5-plain icon"></i>
        <i class="devicon-sass-plain icon"></i>
      </ul>
    </div>
  </div>
</template>

<script>

import './project-styles.scss'
export default {
  name: 'Donkeyshot'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.donkeyshot {
  top:70em !important;
  height: 12.5em !important;
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
