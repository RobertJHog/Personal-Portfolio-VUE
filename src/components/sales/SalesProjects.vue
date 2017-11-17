<template>
  <div class="sales-projects-container">
    <div class="sales-container">
      <div class="sales-projects">
        <div class="project-intro">
          <h1> Sold Projects </h1>
          <p> Coming soon. </p>
        </div>
      </div>
      <div class="project-view">
        <img class="project-view-pic" src="../../assets/images/wsr2.jpg" alt="Project Homerun">
        <div class="project-text">
          <h2> Digitalisering bij Woonstad Rotterdam </h2>
          <span> Online toegang tot de huurdersdossiers heeft de werkwijze van de administratieve afdeling van de corporatie ingrijpend
            veranderd. Alle dossiers kunnen nu op elk gewenst moment en op elke locatie door daartoe geautoriseerde medewerkers worden geraadpleegd.
            Een ander voordeel is dat de dossiers nu ook beschikbaar zijn voor andere afdelingen, zoals de onderhoudsdivisie. Hierdoor zijn de
            teamsgewijze samenwerking en efficiency door de hele organisatie verbeterd.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesProjects'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sales-projects-container {
  height: 55em;
}

.project-intro {
  margin-bottom: 3.5em;
}

.sales-projects {
  margin-top: 5em;
  display: block;
  max-width: 30%;
  max-height: 40vh;
  margin-left: 26em;
  margin-top: 8em;
}

.project-flex {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: row;
  flex-wrap: wrap;
}

.dev-project {
  flex-basis: 35%;
  padding: .2em;
  /*background-color: #d0772b;*/
}

.project-pic {
  /*max-width: 15em;*/
  max-height: 12em;
  border: 2px solid #2c3e50;
  border-radius: 5px;
}

.project-view {
  position: relative;
  right: -84em;
  width: 70em;
  margin-top: -10em;
  border-radius: 15px;
  -webkit-box-shadow: 0 7px 4px #777;
  -moz-box-shadow: 0 7px 4px #777;
  box-shadow: 0 7px 4px #777;
  display: flex;
  flex-direction: row;
  background-image: -moz-linear-gradient(90deg, #697de3 5%, #EBDFDF);
  background-image: -webkit-linear-gradient(90deg, #697de3 5%, #EBDFDF);
  background-image: -ms-linear-gradient(90deg, #697de3 5%, #EBDFDF);
  background-image: linear-gradient(90deg, #697de3 5%, #EBDFDF);
}

/*.project-view:hover {
  opacity: 1;
}*/

.project-view-pic {
  flex: 1;
  display: block;
  position: relative;
  width: 45em;
  height: 45em;
  left: 0em;
  padding: 1em 1em;
  border-radius: 15px;
}

.project-pic img {
  border-radius: 15px;
}

.project-text {
  top: 0em;
  flex: 1;
  position: relative;
  width: 15em;
  color: #2c3e50;
  font-size: 20px;
  line-height: 45px;
  padding: 1em;
}

@media screen and (max-width:1680px) {
  .project-view {
    display: none;
  }
}


@media screen and (min-width:768px) and (max-width:1024px) {
  .sales-container {
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

  .sales-projects {
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

  .sales-project {
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

  .sales-container {
    max-width: 100%;
    min-height: 70em;
  }

  .sales-projects {
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

  .sales-project {
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
