<template>
  <div class="saleswork-container container">
    <div class="tile is-ancestor">
      <div v-for="job in salesJobs" class="tile is-parent">
        <article class="tile is-child is-2">
          <p class="title">{{ job.company }}</p>
          <p class="subtitle"> {{ job.job }} ({{job.duration }}) </p>
          <div class="job-description">
            <p class="job-text"> {{ job.description1 }} </p>
              <br>
            <p class="job-text"> {{ job.description2 }} </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesWork',
  data () {
    return {}
  },
  computed: {
    salesJobs () {
      return this.$store.getters.salesJobs
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.saleswork-container {
  padding: 5vh 5vw;
  min-height: 100vh;
}

.title {
  margin-bottom: 1.5em;
  /*font-size: 1.5em;*/
}

.subtitle {
  padding: 0em;
  /*font-size: 1.25em;*/
}

.title, .subtitle {
  font-family: 'Raleway', sans-serif;
  color: white;
  text-align: left;
  font-weight: bolder;
}

.tile {
  padding: 5vh 3vw;
  width: 35vw;
  /*font-size: 1.5em;*/
  font-family: 'Raleway', sans-serif;
  color: white;
  text-align: left;
}

.job-description {
  opacity: .5;
}

.job-description:hover {
  opacity: 1;
}

@media screen and (max-width:1023px) {
  .tile {
    width: 90vw;
  }
}

@media screen and (max-width:480px) {
  .saleswork-container {
    padding: 0;
    min-height: 220vh;
  }
  .column {
    margin-bottom: 6em;
    width: 86vw;
  }

  .tile {
    margin: 0;
    padding: 3vh 5vw;
    width: 85vw;
    /*font-size: 1.5em;*/
    font-family: 'Raleway', sans-serif;
    color: white;
    text-align: left;
  }
}

</style>
