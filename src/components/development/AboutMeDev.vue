<template>
  <div class="tile is-ancestor">
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box border-solid">
        <p class="title">Latest Project</p> <br>
        <p class="subtitle"> DonkeyShot </p>
        <span> For a former sales client I have built a company <a href="http://www.donkeyshot.nl" class="project-link">website</a> based on his preferences.
          I have used a HTML5up template as a starting point.
        </span>
        <div class="language-icons">
          <ul>
            <i class="devicon-javascript-plain icon"></i>
            <i class="devicon-html5-plain icon"></i>
            <i class="devicon-sass-plain icon"></i>
          </ul>
        </div>
      </div>
      <div class="tile is-child box border-solid">
        <figure class="image is-16by9 project-pic">
          <img src="../../assets/images/donkeyshot.jpg">
        </figure>
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child box border-solid">
        <figure class="image is-4by3">
          <img class="my-pic" src="../../assets/images/RJHogerbruggeDev.jpg" alt="My pic">
        </figure>
        <p class="title">About me</p>
        <p>After ten awesome years in sales and business development I felt it was time for a change in my career.
           In a four month sabbatical I overthought my career and tried to figure out what gives me joy in life and how
           I would like to spend the next ten years of my life.</p>
        <br>
        <p> For a month I have learned the basics of programming
        languages such as HTML, CSS, Python and Ruby. The process gave me so much joy that I applied for a traineeship
        with Codaisseur to become a junior developer. From January until March 2017 I have spent over 500 hours at Codaisseur
        to develop my skillset as a programmer.</p>
      </div>
    </div>
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box border-solid">
        <p class="title">Frontend</p>
        <p></p>
        <div class="front-logos">
          <img class="logo" src="../../assets/images/logos/html5.png" alt="html logo">
          <img class="logo" src="../../assets/images/logos/css3.png" alt="Css3 logo">
          <img class="logo" src="../../assets/images/logos/javascript.png" alt="JS logo">
          <img class="logo" src="../../assets/images/logos/vue.png" alt="Vue logo">
          <img class="logo" src="../../assets/images/logos/react.png" alt="React logo">
        </div>
      </div>
      <div class="tile is-child box border-solid">
        <p class="title">Backend</p>
        <p></p>
        <div class="front-logos">
          <img class="logo" src="../../assets/images/logos/nodejs.png" alt="nodejs logo">
          <img class="logo" src="../../assets/images/logos/mongodb.png" alt="mongodb logo">
          <img class="logo" src="../../assets/images/logos/mysql.png" alt="mysql logo">
          <img class="logo" src="../../assets/images/logos/rails.png" alt="rails logo">
          <img class="logo" src="../../assets/images/logos/ruby.png" alt="ruby logo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMeDev'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.language-icons {
  margin: 1em auto;
}

.tile {
  padding: 1em;
}

.border-solid {
  border: #d0772b solid 2px;
  -webkit-box-shadow: 0px 7px 4px #777;
  -moz-box-shadow: 0px 7px 4px #777;
  box-shadow: 0px 7px 4px #777;
}

.image .my-pic {
  border-radius: 10px;
  height: 8em;
  width: 8em;
  float: left;
  margin: 0 auto;
  border: solid 2px white;
  -webkit-box-shadow: 2px 7px 4px #777;
  -moz-box-shadow: 2px 7px 4px #777;
  box-shadow: 2px 7px 4px #777;
}

.image.is-4by3 {
  padding-top: 50%;
}

.project-pic img {
  border-radius: 10px;
}

.image.is-16by9 {
  width: 100%;
  height: 100%;
}

.aboutme {
  /*background-color: #4a4a4a;
  color: white;*/
}

.front-logos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /*width: 20em;*/
  justify-content: center;
  margin: 2em auto;
}

.logo {
  height: 3.5em;
  width: 3em;
  display: block;
  margin: 1em 1em;
}

@media screen and (max-width:480px) {
  .logo {
    width: 2.4em;
  }
}

</style>
