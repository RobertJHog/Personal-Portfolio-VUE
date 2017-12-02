<template>
  <div class="devwork-container container">
    <div class="tile is-ancestor">
      <div v-for="job in devJobs" class="tile is-parent">
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
  name: 'DevWork',
  computed: {
    devJobs () {
      return this.$store.getters.devJobs
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.devwork-container {
  height: 100vh;
  margin: 0 auto;
}

.title {
  margin-bottom: 1.5em;
  /*font-size: 1.25em;*/
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
  margin: 5vh;
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

@media screen and (max-width:480px) {
  .tile {
    margin: 0;
    padding: 5vw;
    width: 90vw;
  }

  .devwork-container {
    min-height: 200vh;
  }
}


</style>
