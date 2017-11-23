<template>
  <div class="tile is-ancestor">
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box aboutme">
        <p class="title">About me</p>
        <p>After ten awesome years in sales and business development I felt it was time for a change in my career.
           In a four month sabbatical I overthought my career and tried to figure out what gives me joy in life and how
           I would like to spend the next ten years of my life.</p>
      </div>
      <div class="tile is-child box">
        <!-- <p class="title">Two</p> -->
        <p> For a month I have learned the basics of programming
        languages such as HTML, CSS, Python and Ruby. The process gave me so much joy that I applied for a traineeship
        with Codaisseur to become a junior developer. From January until March 2017 I have spent over 500 hours at Codaisseur
        to develop my skillset as a programmer.</p>
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">Frontend</p>
        <p></p>
        <div class="front-logos">
          <img class="logo" src="../../assets/images/logos/html5.png" alt="html logo">
          <img class="logo" src="../../assets/images/logos/css3.png" alt="Css3 logo">
          <img class="logo" src="../../assets/images/logos/javascript.png" alt="JS logo">
          <img class="logo" src="../../assets/images/logos/vue.png" alt="Vue logo">
          <img class="logo" src="../../assets/images/logos/react.png" alt="React logo">
        </div>
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
    <div class="tile is-parent">
      <div class="tile is-child box">
        <figure class="image is-4by3">
          <img class="my-pic" src="../../assets/images/RJHogerbruggeDev.jpg" alt="My pic">
        </figure>
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

.tile {
  padding: 1em;
}

.my-pic img {
  border-radius: 5px;
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
  height: 4.5em;
  width: 3.8em;
  display: block;
  margin: 1em 1em;
}

@media screen and (max-width:480px) {
  .logo {
    width: 2.4em;
  }
}

</style>
