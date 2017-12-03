<template>
  <div class="aboutsales-container">
    <div class="tile is-ancestor">
      <div class="tile is-5 is-parent">
        <article class="tile is-child">
          <p class="title myskills">My Skills</p>
          <p class="subtitle skills"> Business Development </p>
          <p class="aboutme"> Solution Selling, B2B, Tenders, Sales Management & Coaching, Telesales, Advanced Negotiations </p>
          <p class="subtitle skills"> Account Management</p>
          <p class="aboutme"> Corporate & Mid-market, Strategic Account Planning, Customer Service, Project Management </p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child">
          <p class="title myname">Hello. I am Robert Jan,</p>
            <p class="aboutme">Starting out as a sales trainee for a management consultancy firm l quickly learned the ropes of
              cold-acquisition and lead-generation. <br><br> After 4 years of deskwork I went into the fields as a business developer in information management.
                For 6 years I closed six figure deals nationally and internationally with the biggest corporate companies in the world.
            </p>
            <br>
            <p class="aboutme">
              During that period I won a seat for the chairman's club of Iron Mountain for the top global performmers two times. Now I
              have taken a different direction as a web developer, but I will always take my experience and sales skills with me.
            </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMeSales'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.aboutsales-container {
  width: 100%;
  min-height: 100vh;
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
  padding: 2vw;
  width: 40vw;
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
  color: white;
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
  .aboutsales-container {
    min-height: 220vh;
  }

  .logo {
    width: 3.5em;
  }
}

</style>
