<template>
  <div class="project-view">
    <img class="project-view-pic" src="../../../assets/images/homerun.jpg" alt="Project Homerun">
    <div class="project-text">
      <span> During 4 months I have worked as a junior developer on the platform of Homerun. Under supervision they learned
         me the ropes on HTML, CSS, Javascript and mysql within a large web application. The main focus was transforming the main framework (Angular 1.X) into Vue.js.
         It was refactoring a lot of excisting code into the new framework.
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Homerun'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.project-view {
  position: relative;
  right: -84em;
  width: 70em;
  height: 55em;
  bottom: 38em;
  /*border: solid 2px #0E0B16;*/
  border-radius: 15px;
  /*background-color: #db8237;*/
  box-shadow: 7.5px 7.5px 3.5px #888888;
  display: flex;
  flex-direction: column;
  /*opacity: .5;*/
  background-image: -moz-linear-gradient(90deg, #0E0B16 5%, #2c3e50);
  background-image: -webkit-linear-gradient(90deg, #0E0B16 5%, #2c3e50);
  background-image: -ms-linear-gradient(90deg, #0E0B16 5%, #2c3e50);
  background-image: linear-gradient(90deg, #0E0B16 5%, #2c3e50);
}

/*.project-view:hover {
  opacity: 1;
}*/

.project-view-pic {
  flex: 1;
  display: block;
  position: relative;
  width: 68em;
  height: 42em;
  left: 0em;
  padding: 1em 1em;
  border-radius: 15px;
}

.project-text {
  top: 0em;
  flex: 1;
  position: relative;
  width: 55em;
  color: white;
  font-size: 20px;
  line-height: 45px;
  padding: 1em;
}

@media screen and (min-width:768px) and (max-width:1024px) {
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
    display: none;
  }

  .project-pic {
    width: 100%;
  }
}

@media screen and (min-width:320px) and (max-width:480px) {
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
