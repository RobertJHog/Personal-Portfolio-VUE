<template>
  <div class="dev-skills-container">
    <div class="dev-skills">
      <br>
      <div class="skill-type">
          <h2> Front-end </h2>
          <!-- <p> HTML5, CSS3, Javascript(ES6), React, Vue </p> -->
            <div class="front-logos">
              <img class="logo" src="../../assets/images/logos/html5.png" alt="html logo">
              <img class="logo" src="../../assets/images/logos/css3.png" alt="Css3 logo">
              <img class="logo" src="../../assets/images/logos/javascript.png" alt="JS logo">
              <img class="logo" src="../../assets/images/logos/vue.png" alt="Vue logo">
              <img class="logo" src="../../assets/images/logos/react.png" alt="React logo">
            </div>
      </div>
      <div class="skill-type">
        <h2>Back-end </h2>
        <!-- <p>NodeJS, APIs, MongoDB, MySQL, Rails, Ruby </p> -->
        <div class="front-logos">
          <img class="logo" src="../../assets/images/logos/nodejs.png" alt="nodejs logo">
          <img class="logo" src="../../assets/images/logos/mongodb.png" alt="mongodb logo">
          <img class="logo" src="../../assets/images/logos/mysql.png" alt="mysql logo">
          <img class="logo" src="../../assets/images/logos/rails.png" alt="rails logo">
          <img class="logo" src="../../assets/images/logos/ruby.png" alt="ruby logo">
        </div>
      </div>
      <div class="skill-type">
        <h2> Apps </h2>
        <!-- <p> React Native </p> -->
        <div class="front-logos">
          <img class="logo" src="../../assets/images/logos/reactnative.png" alt="react native logo">
        </div>
      </div>
    </div>
    <div class="certificate-container">
      <img class="certificate-pic" src="../../assets/images/codaisseur-certificate.jpg" alt="Codaisseur certificate">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevSkills',
  transition: 'fadeOpacity'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dev-skills-container {
  height: 55vh;
  max-height:70vh;
}

.certificate-pic {
  height: 30em;
  max-width: 40em;
  opacity: 1;
}

.certificate-container {
  display: inline-block;
  position: relative;
  margin-left: 98em;
  margin-top: -6em;
  bottom: 34em;
  height: 30em;
  max-width: 40em;
  padding: 1em;
  /*border: solid 2px #0E0B16;*/
  border-radius: 15px;
  /*background-color: #db8237;*/
  -webkit-box-shadow: 0 7px 4px #777;
  -moz-box-shadow: 0 7px 4px #777;
  box-shadow: 0 12px 8px #777;
  display: flex;
  flex-direction: row;
  opacity: .75;
  background-image: -moz-linear-gradient(90deg, #d0772b 5%, #EBDFDF);
  background-image: -webkit-linear-gradient(90deg, #d0772b 5%, #EBDFDF);
  background-image: -ms-linear-gradient(90deg, #d0772b 5%, #EBDFDF);
  background-image: linear-gradient(90deg, #d0772b 5%, #EBDFDF);
}

.skill-type {
  margin-bottom: 3em;
}

.dev-skills {
  margin-top: 4em;
  display: block;
  width: 50em;
  margin-left: 10em;
  font-size: 150%;
}

.front-logos {
  display: flex;
  flex-direction: row;
  width: 20em;
  margin-left: 15em;
  justify-content: center;
}

.logo {
  height: 3em;
  width: 3em;
  display: block;
  margin-right: 1em;
}


@media and (max-width:980px) {
  .dev-skills-container {
    max-width: 100%;
    min-height: 100%;
  }
  .certificate-container {
    display: none;
  }
  .skill-type {
    margin-bottom: 3em;
  }

  .dev-skills {
    display: block;
    width: 100%;
    margin-left: 0em;
    margin-top: 0em;
  }
}

@media and (max-width:736px) {
  .dev-skills-container {
    max-width: 100%;
    min-height: 100%;
  }
  .certificate-container {
    display: none;
  }
  .skill-type {
    margin-bottom: 3em;
  }

  .dev-skills {
    margin-top: 10em;
    display: block;
    width: 100%;
    margin-left: 0em;
    margin-top: 4em;
  }
}

@media screen (max-width:480px) {
  .dev-skills-container {
    max-width: 100%;
    height: 100%;
  }
  .certificate-container {
    display: none;
  }
  .skill-type {
    margin-bottom: 3em;
  }

  .dev-skills {
    margin-top: 10em;
    display: block;
    width: 100%;
    margin-left: 0em;
    margin-top: 0em;
  }
}

</style>
