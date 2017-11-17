<template>
  <div class="dev-work">
    <div class="job-description">
      <h2> Homerun 2017 - 2017 </h2>
      <h3> Junior developer </h3>
      <p class="job-text"> During 4 months I have worked as a junior developer on the platform of Homerun. Under supervision they learned me the ropes on
        HTML, CSS, Javascript and mysql within a large web application.
        <br><br>
        The main focus was transforming the main framework (Angular 1.X) into Vue.js. It was refactoring a lot of excisting code into the new framework.
      </p>
    </div>
    <div class="job-description">
      <h2> Your company? </h2>
      <h3> Developer </h3>
      <p class="job-text"> Be smart. Take a shot. ;-) <br><br>


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

.dev-work {
  display: flex;
  flex-direction: row;
  margin-left: 35em;
  margin-top: 10em;
  height: 62.5vh;
  max-height:80vh;
}

.job-description {
  width: 25em;
  padding: 0em 6em;
  opacity: 0.5;
}

/*.job-description h2, .job-description h3,  {
  width: 15em;
}*/

.job-description:hover {
  opacity: 1;
}

.job-text {
  width: 20em;
  font-size: 20px;
  word-spacing: 1.5px;
  line-height: 35px;
}

@media screen and (max-width:1680px) {
  .dev-work {
    margin-left: 15em;
  }
}

@media screen and (max-width:1280px) {
  .dev-work {
    display: flex;
    flex-direction: row;
    margin-left: 4em;
    margin-top: 5em;
    margin-bottom: 5em;
  }

  .job-description {
    width: 25em;
    padding: 0em 6em;
    opacity: 0.5;
  }
}

@media screen and (max-width:980px) {
  .dev-work {
    margin-left: 15em;
  }
}

@media screen and (max-width:768px) {
  .dev-work {
    max-width: 100%;
    min-height: 70vh;
    flex-direction: column;
    margin-left: 0em;
    margin-top: 3em;
  }

  .job-description {
    width: 94%;
    max-height: 20em;
    padding: 0em 6em;
    opacity: 1;
    flex: 1;
    padding: 0em;
  }

  /*.job-description h2, .job-description h3,  {
    width: 15em;
  }*/

  .job-description:hover {
    opacity: 1;
  }

  .job-text {
    width: 100%;
    font-size: 16px;
    padding: 8px;
  }
}

@media screen and (max-width:480px) {
  .dev-work {
    max-width: 100%;
    height: 100%;
    flex-direction: column;
    margin-left: 0em;
    margin-top: 3em;
  }

  .job-description {
    width: 94%;
    max-height: 20em;
    padding: 0em 6em;
    opacity: 1;
    flex: 1;
    padding: 0em;
    margin-bottom: 6em;
  }

  .job-description:hover {
    opacity: 1;
  }

  .job-text {
    width: 100%;
    font-size: 16px;
    padding: 8px;
  }
}

</style>
