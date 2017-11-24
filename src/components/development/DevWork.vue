<template>
  <div class="columns">
    <div class="column">
      <p class="title">Homerun 2017 - 2017</p>
      <p class="subtitle"> Junior developer </p>
      <p class="job-text"> During 4 months I have worked as a junior developer on the platform of Homerun. Under supervision they learned me the ropes on
        HTML, CSS, Javascript and mysql within a large web application.
        <br><br>
        The main focus was transforming the main framework (Angular 1.X) into Vue.js. It was refactoring a lot of excisting code into the new framework.
      </p>
    </div>
    <div class="column">
      <p class="title">Your company?</p>
      <p class="subtitle"> Junior developer </p>
      <p class="job-text"> Always open to new opportunities in webdevelopment with HTML5, CSS3 (Sass, Less), Javascript, Ruby and libraries/frameworks such as
        React, Vue, Angular, Rails. Very willing to learn new languages and frameworks.
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevWork'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title {
  margin-bottom: 1em;
}

.columns {
  margin: 2em auto;
}

.column {
  margin: 2em;
  width: 20em;
  height: 60vh;
  opacity: .5;
}

.column:hover {
  opacity: 1;
}

</style>
