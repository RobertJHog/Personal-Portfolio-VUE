<template>
  <div class="devwork-container">
    <div class="tile is-ancestor">
      <div v-for="job in devJobs" class="tile is-parent">
        <article class="tile is-child is-2 box border-solid">
          <p class="title">{{ job.company }}</p>
          <p class="subtitle"> {{ job.job }} </p>
          <p class="job-text"> {{ job.description1 }} </p>
            <br><br>
          <p class="job-text"> {{ job.description2 }} </p>
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
  padding: 2em auto;
  margin: 0em 7em 4em 7em;
}

.border-solid {
  border: #d0772b solid 1px;
  -webkit-box-shadow: 0px 7px 4px #777;
  -moz-box-shadow: 0px 7px 4px #777;
  box-shadow: 0px 7px 4px #777;
  border-radius: 20px;
}

.title {
  margin-bottom: 1em;
}

.tile {
  margin: 2em;
  width: 20em;
  opacity: .5;
  font-size: 20px
}

.tile.is-child {
  background-color: #ececec;
}

.tile:hover {
  opacity: 1;
}

</style>
