<template>
  <div class="aboutdev-container">
    <div class="tile is-ancestor">
      <div class="tile is-5 is-parent">
        <article class="tile is-child">
          <p class="title myskills">My Skills</p>
          <p class="subtitle skills"> Front-end </p>
          <p class="aboutme"> CSS3, Javascript, ES6, React, Vue, Angular </p>
          <p class="subtitle skills"> Back-end</p>
          <p class="aboutme"> NodeJS, PHP, APIs, MySql, MongoDB </p>
          <p class="subtitle skills"> Apps </p>
          <p class="aboutme"> React Native </p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child">
          <p class="title myname">Hi! I am Robert Jan,</p>
            <p class="aboutme">After ten awesome years in sales and business development I
              felt it was time for a change in my career. I applied for a traineeship
              with Codaisseur to become a junior developer. From January until March 2017
              I have spent over 500 hours at Codaisseur to develop my skillset as a programmer.
            </p>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-11 is-parent">
        <article class="tile is-child box">
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
}

.language-icons {
  margin: 1.5em 0em;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.language-icons .icon {
  margin: 0em .75em;
}

.tile {
  padding: 1em;
  text-align: center;
}

.tile .is-parent {
  margin: 0 4em;
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
}

.skills {
  text-align: left;
}

.skills-text {
  font-size: 24px;
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
  font-size: 24px;
  color: #8e8d8d;
}

.front-logos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2em auto;
}

.logo {
  height: 3.5em;
  width: 3.75em;
  display: block;
  margin: 1em 1em;
}

@media screen and (max-width:480px) {
  .aboutdev-container {
    height: 350vh;
  }

  .logo {
    width: 3.5em;
  }
}

</style>
