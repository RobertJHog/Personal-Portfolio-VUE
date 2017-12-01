<template>
  <div class="saleswork-container">
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
  height: 100vh;
}

.title {
  margin-bottom: 1.5em;
  font-size: 24px;
}

.subtitle {
  padding: 0em;
  font-size: 20px;
}

.title, .subtitle {
  font-family: 'Raleway', sans-serif;
  color: white;
  text-align: left;
  font-weight: bolder;
}

.tile {
  margin: 0 2em;
  padding: 1em 0;
  width: 20em;
  font-size: 24px;
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
  .saleswork-container {
    top: 5em;
  }
  .column {
    margin-bottom: 6em;
    width: 86vw;
  }
}

</style>
