<template>
  <div class="dev-projects-container">
    <div class="dev-projects">
      <!-- <div class="project-intro">
        <h1> Projects I have worked on. </h1>
      </div> -->
      <div class="project-flex">
        <div class="dev-project">
          <button class="lined-thin" v-on:click="component = 'Homerun'"> Homerun </button>
          <img class="project-pic" src="../../assets/images/homerun.jpg" alt="Project Homerun">
        </div>
        <div class="dev-project">
          <button class="lined-thin" v-on:click="component = 'Rjportfolio'"> Personal Portfolio </button>
          <img class="project-pic" src="../../assets/images/rjhportfolio.jpg" alt="Project Portfolio">
        </div>
        <div class="dev-project">
          <button class="lined-thin" v-on:click="component = 'Rolfportfolio'"> Director Portfolio </button>
          <img class="project-pic" src="../../assets/images/rolfportfolio.jpg" alt="Project Movie Portfolio">
        </div>
        <div class="dev-project">
          <button class="lined-thin" v-on:click="component = 'Donkeyshot'"> DonkeyShot </button>
          <img class="project-pic" src="../../assets/images/donkeyshot.jpg" alt="Project DonkeyShot">
        </div>
      </div>
    </div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
  </div>
</template>

<script>

import Homerun from '@/components/development/projects/homerun'
import Donkeyshot from '@/components/development/projects/donkeyshot'
import Rolfportfolio from '@/components/development/projects/rolfportfolio'
import Rjportfolio from '@/components/development/projects/rjportfolio'

export default {
  name: 'DevProjects',
  components: {
    Homerun,
    Rolfportfolio,
    Donkeyshot,
    Rjportfolio
  },
  data () {
    return {
      component: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dev-projects-container {
  height: 55em;
}

.project-intro {
  margin-bottom: 3.5em;
}

.project-intro h1 {
  /*color: #2196F3;*/
}

.dev-projects {
  margin-top: 5em;
  display: block;
  width: 30%;
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

.project-pic img {
  border-radius: 15px;
}

/*Button*/


h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button:hover,
button.hover {
  box-shadow: inset 0 0 0 1px #27496d,0 5px 15px #193047;
}

button:active,
button.active {
  box-shadow: inset 0 0 0 1px #27496d,inset 0 5px 30px #193047;
}

button{
  align-self:center;
  background:transparent;
  padding:1rem 1rem;
  margin:1rem 1rem;
  transition:all .5s ease;
  color:#41403E;
  font-size:1em;
  letter-spacing:1px;
  outline:none;
  box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  /*
  Above is shorthand for:
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius:15px 255px;
  */
}

button:hover{
  box-shadow:2px 8px 4px -6px hsla(0,0%,0%,.3);
}

.lined-thick{
  border:solid 7px #41403E;
  flex: 1;
}

 .lined-thin{
 /*border:solid 2px #d0772b;*/
 flex: 1;
}

@media screen and (max-width:1680px) {
  .dev-container {
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

  .dev-projects {
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

  .dev-project {
    flex: 1;
    width: 100%;
    height: 20%;
    margin-bottom: 9em;
    /*background-color: #d0772b;*/
  }

  .project-view {
    display: block;
  }

  .project-pic {
    width: 100%;
  }
}

@media screen and (max-width:1280px) {
  .dev-container {
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

  .dev-projects {
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

  .dev-project {
    flex: 1;
    width: 100%;
    height: 20%;
    margin-bottom: 9em;
    /*background-color: #d0772b;*/
  }

  .project-view {
    display: block;
  }

  .project-pic {
    width: 100%;
  }
}

@media screen and (max-width:980px) {
  .dev-container {
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

  .dev-projects {
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

  .dev-project {
    flex: 1;
    width: 100%;
    height: 20%;
    margin-bottom: 9em;
    /*background-color: #d0772b;*/
  }

  .project-view {
    display: block;
  }

  .project-pic {
    width: 100%;
  }
}

@media screen and (max-width:736px) {
  .dev-container {
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

  .dev-projects {
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

  .dev-project {
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

@media screen and (max-width:480px) {
  .project-intro {
    width: 100vw;
    margin-bottom: 0em;
  }

  .dev-container {
    max-width: 100%;
    min-height: 70em;
  }

  .dev-projects {
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

  .dev-project {
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

@media screen and (max-width:320px) {

}

</style>
