<template>
  <div class="dev-skills-container">
    <div class="dev-skills">
      <br>
      <div class="skill-type">
        <h2> Front-end </h2>
        <p> HTML5, CSS3, Javascript(ES6), React, Vue </p>
      </div>
      <div class="skill-type">
        <h2>Back-end </h2>
        <p>NodeJS, PHP, APIs, MongoDB, MySQL </p>
      </div>
      <div class="skill-type">
        <h2> Apps </h2>
        <p> React Native </p>
      </div>
    </div>
    <div class="certificate-container">
      <img class="certificate-pic" src="../../assets/images/codaisseur-certificate.jpg" alt="Codaisseur certificate">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevSkills'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dev-skills-container {
  max-height: 60vh;
}

.certificate-pic {
  width: 60em;
  opacity: 1;
}

.certificate-container {
  display: inline-block;
  position: relative;
  left: 90em;
  bottom: 37.5em;
  width: 60em;
  padding: 1em;
  /*border: solid 2px #0E0B16;*/
  border-radius: 15px;
  /*background-color: #db8237;*/
  box-shadow: 7.5px 7.5px 3.5px #888888;
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
  margin-top: 10em;
  display: block;
  width: 50em;
  margin-left: 30em;
  margin-top: 18em;
}


@media screen and (min-width:768px) and (max-width:1024px) {
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
    margin-top: 0em;
  }
}

@media screen and (min-width:320px) and (max-width:480px) {
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
