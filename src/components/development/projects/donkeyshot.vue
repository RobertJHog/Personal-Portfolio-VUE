<template>
  <div class="project-view">
    <img class="project-view-pic" src="../../../assets/images/donkeyshot.jpg" alt="DonkeyShot website">
    <div class="project-text">
      <span> For a former sales client I have built a company website based on his preferences.
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

export default {
  name: 'Donkeyshot'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.icon {
  font-size: 30px;
  margin-right: 2em;
  color: #697de3;
}

.project-view {
  position: relative;
  margin-left: 16em;
  top:10em;
  display: block;
  flex: 1;
  max-width: 40em;
  max-height: 35em;
  /*border: solid 2px #0E0B16;*/
  border-radius: 15px;
  /*background-color: #db8237;*/
  box-shadow: 7.5px 7.5px 3.5px #888888;
  display: flex;
  flex-direction: column;
  /*opacity: .5;*/
  background-color: #2c3e50;
  /*background-image: -moz-linear-gradient(90deg, #0E0B16 5%, #2c3e50);
  background-image: -webkit-linear-gradient(90deg, #0E0B16 5%, #2c3e50);
  background-image: -ms-linear-gradient(90deg, #0E0B16 5%, #2c3e50);
  background-image: linear-gradient(90deg, #0E0B16 5%, #2c3e50);*/
}

/*.project-view:hover {
  opacity: 1;
}*/

.project-view-pic {
  flex: 1;
  display: block;
  position: relative;
  max-width: 40em;
  left: 0em;
  padding: 1em 1em;
  border-radius: 15px;
}

.project-text {
  top: 0em;
  flex: 1;
  position: relative;
  max-width: 38em;
  text-align: center;
  width: 55em;
  color: white;
  font-size: 16px;
  line-height: 45px;
  padding: 1em;
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
