<template>
  <div class="devwork-container">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child is-2 box border-solid">
          <p class="title">Homerun 2017 - 2017</p>
          <p class="subtitle"> Junior developer </p>
          <p class="job-text"> During 4 months I have worked as a junior developer on the platform of Homerun. Under supervision they learned me the ropes on
            HTML, CSS, Javascript and mysql within a large web application.
            <br><br>
            The main focus was transforming the main framework (Angular 1.X) into Vue.js. It was refactoring a lot of excisting code into the new framework.
          </p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box border-solid">
          <p class="title">Your company?</p>
          <p class="subtitle"> Junior developer </p>
          <p class="job-text"> Always open to new opportunities in webdevelopment with HTML5, CSS3 (Sass, Less), Javascript, Ruby and libraries/frameworks such as
            React, Vue, Angular, Rails. Very willing to learn new languages and frameworks.
          <br><br>
          send me a message! </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevWork'
  // transition: 'slide'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*Transitions*/
/*.enter { transform: translateX(100%) }
.enter-to { transform: translateX(0) }
.slide-enter-active { position: absolute }

.leave { transform: translateX(0) }
.leave-to { transform: translateX(-100%) }

.slide-enter-active,
.slide-leave-active { transition: all 750ms ease-in-out }*/

.devwork-container {
  padding: 2em auto;
  margin: 0em 7em 4em 7em;
}

.border-solid {
  border: #d0772b solid 4px;
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

.tile:hover {
  opacity: 1;
}

</style>
