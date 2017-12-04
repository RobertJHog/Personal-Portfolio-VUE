<template>
  <div class="aboutdev-container">
    <div class="tile is-ancestor">
      <div class="tile is-5 is-parent">
        <article class="tile is-child">
          <p class="title myskills">My Skills</p>
          <p class="subtitle skills"> Front-end </p>
          <p class="aboutme"> HTML5, CSS3, Javascript(ES6), React, Vue </p>
          <p class="subtitle skills"> Back-end</p>
          <p class="aboutme"> NodeJS, ExpressJs, Ruby on Rails, MySql, MongoDB </p>
          <p class="subtitle skills"> Apps </p>
          <p class="aboutme"> React Native </p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child">
          <p class="title myname">Hi! I am Robert Jan,</p>
            <p class="aboutme">After ten awesome years in sales and business development I
              felt it was time for a change in my career. In the last year I completed an extensive 9
              week bootcamp with Codaisseur, worked on personal projects, built sites for relatives and worked on a large platform for a startup.
            </p>
            <br>
            <p class="aboutme"> Now I am moving on to my next challenge as a javascript developer. My coming years are focussed on intensive learning and gaining
              more professional experience as a front end developer with a healthy dosis of back end. Feel free to contact me for any opportunities.
            </p>

        </article>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutMeDev',
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.aboutdev-container {
  width: 100%;
  min-height: 100vh;
}

.tile {
  padding: 2vw;
  text-align: center;
}

.tile .is-parent {
  margin: 0 5vw;
}

.transparent {
  opacity: 0.0;
}

.box {
  background-color: inherit;
}

.subtitle {
  padding: 0em;
}

.title {
  margin-bottom: 1em;
  margin-top: .75em;
}

.myskills {
  font-family: 'Raleway', sans-serif;
  color: white;
  text-align: left;
  line-height: 35px;
}

.skills {
  text-align: left;
}

.skills-text {
  /*font-size: 1.5em;*/
  color:
}

.myname {
  font-family: 'Raleway', sans-serif;
  color: white;
  text-align: left;
}

.aboutme {
  text-align: left;
  margin-bottom: 1em;
  line-height: 35px;
}

.project-link {
  margin-bottom: 1em;
}

.title.latest {
  margin-bottom: 0em;
}

.image .my-pic {
  border-radius: 10px;
  height: 8em;
  width: 8em;
  float: left;
  margin: 0 auto;
  border: 1px solid #813772;
  -webkit-box-shadow: 2px 7px 4px #777;
  -moz-box-shadow: 2px 7px 4px #777;
  box-shadow: 2px 7px 4px #777;
}

.image.is-4by3 {
  padding-top: 50%;
}

.project-pic img {
  border-radius: 10px;
  /*border: 2px solid #697de3;*/
}

.image.is-16by9 {
  width: 100%;
  height: 100%;
}

p.aboutme {
  /*font-size: 1.5em;*/
  color: #8e8d8d;
}

@media screen and (max-width:480px) {
  .tile {
    width: 95vw;
    /*font-size: 1.5em;*/
    font-family: 'Raleway', sans-serif;
    color: white;
    text-align: left;
  }

  .aboutdev-container {
    min-height: 200vh;
  }

}

</style>
