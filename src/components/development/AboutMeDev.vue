<template>
  <div class="aboutdev-container">
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box border-solid">
            <p class="title latest">Latest Project</p> <br>
            <a class="project-link" :href="latestProject.siteurl" target="_blank"> <p class="subtitle project-link"> {{ latestProject.title }}</p></a>
            <span> {{ latestProject.description }}
            </span>
            <div>
              <ul class="language-icons">
                <i v-for="logo in latestLogos" :class="logo"></i>
              </ul>
            </div>
          </div>
          <div class="tile is-child box border-solid">
            <figure class="image is-16by9 project-pic">
              <img :src="latestProject.image">
            </figure>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box border-solid">
            <figure class="image is-1by2">
              <img class="my-pic" src="../../assets/images/RJHogerbruggeDev.jpg" alt="My pic">
            </figure>
              <p class="title">About me</p>
              <br>
              <p class="aboutme">After ten awesome years in sales and business development I felt it was time for a change in my career.
                 In a four month sabbatical I overthought my career and tried to figure out what gives me joy in life and how
                 I would like to spend the next ten years of my life.
                <br><br>
                For a month I have learned the basics of programming
                languages such as HTML, CSS, Python and Ruby. The process gave me so much joy that I applied for a traineeship
                with Codaisseur to become a junior developer. From January until March 2017 I have spent over 500 hours at Codaisseur
                to develop my skillset as a programmer.
              </p>
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
    </div>
 </div>
</template>

<script>

export default {
  name: 'AboutMeDev',
  computed: {
    latestProject () {
      return this.$store.getters.latestProject
    },
    latestLogos () {
      let project = this.$store.getters.latestProject
      return project.devlogos
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
}

.subtitle {
  padding: 0em;
}

.title {
  margin-bottom: 1em;
  margin-top: .75em;
}

.project-link {
  margin-bottom: 1em;
}

.title.latest {
  margin-bottom: 0em;
}

.border-solid {
  border: #d0772b solid 4px;
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
  border: 2px solid #697de3;
  /*border: solid 2px white;*/
  -webkit-box-shadow: 2px 7px 4px #777;
  -moz-box-shadow: 2px 7px 4px #777;
  box-shadow: 2px 7px 4px #777;
}

.image.is-4by3 {
  padding-top: 50%;
}

.project-pic img {
  border-radius: 10px;
  border: 2px solid #697de3;
}

.image.is-16by9 {
  width: 100%;
  height: 100%;
}

.aboutme {
  font-size: 20px;
  padding-top: 2em;
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
