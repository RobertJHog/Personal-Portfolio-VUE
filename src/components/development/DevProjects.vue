<template>
  <div class="projects-container">
    <Modal v-if="showModal" :project="selectedProject" @close="deselectProject">
    </Modal>

    <div class="tile is-ancestor">
      <div v-for="project in projectsRowOne" class="tile is-5 is-parent">
        <article class="tile is-child">
          <button id="show-modal" @click="selectProject(project)">{{project.title}}</button>
          <figure class="image is-16by9">
            <img :src="project.image" alt="Project Image">
          </figure>
          <ul class="language-icons">
            <i v-for="logo in project.devlogos" :class="logo"></i>
          </ul>
        </article>
      </div>
    </div>

    <!-- <div class="tile is-ancestor">
      <div v-for="project in projectsRowTwo" class="tile is-5 is-parent">
        <article class="tile is-child">
          <button id="show-modal" @click="selectProject(project)">{{project.title}}</button>
          <figure class="image is-16by9">
            <img :src="project.image" alt="Project Image">
          </figure>
          <ul class="language-icons">
            <i v-for="logo in project.devlogos" :class="logo"></i>
          </ul>
        </article>
      </div>
    </div> -->
  </div>
</template>

<script>

import Homerun from '@/components/development/projects/homerun'
import Donkeyshot from '@/components/development/projects/donkeyshot'
import Rolfportfolio from '@/components/development/projects/rolfportfolio'
import Rjportfolio from '@/components/development/projects/rjportfolio'
import Modal from '@/components/Modal'

export default {
  name: 'DevProjects',
  components: {
    Homerun,
    Rolfportfolio,
    Donkeyshot,
    Rjportfolio,
    Modal
  },
  data () {
    return {
      component: '',
      showModal: false,
      selectedProject: undefined
    }
  },
  computed: {
    projectsRowOne () {
      return this.$store.getters.devProjects.slice(0, 3)
    },
    projectsRowTwo () {
      return this.$store.getters.devProjects.slice(3, 6)
    }
  },
  methods: {
    selectProject (project) {
      this.selectedProject = project
      this.showModal = true
    },
    deselectProject () {
      this.selectedProject = undefined
      this.showModal = false
    }
  },
  transition: 'moveIn'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.language-icons {
  margin: 1.5em auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.language-icons .icon {
  margin: 0em .75em;
}

figure.image {
  /*border: 2px solid white;*/
  border-radius: 5px;
  overflow: hidden;
}

.projects-container {
  /*width: 75%;*/
  height: 100vh;
  margin-top: 15vh;
}

#show-modal {
  font-family: 'Raleway', sans-serif;
  margin-bottom: 1em;
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
  background: none;
  border: none;
}

#show-modal:hover {
  color: #3273dc;
}

.border-solid {
  border: #d0772b solid 1px;
  -webkit-box-shadow: 0px 7px 4px #777;
  -moz-box-shadow: 0px 7px 4px #777;
  box-shadow: 0px 7px 4px #777;
  border-radius: 40px;
}

.title, .subtitle {
  font-family: 'Raleway', sans-serif;
  color: white;
  text-align: left;
  font-weight: bolder;
}

.tile {
  padding: 2vh 1vw;
}

.tile .is-ancestor {
  margin-top: 5em;
}

.project-tile {
  margin: 1em;
}

@media screen and (max-width:480px) {
  .projects-container {
    width: 100%;
    margin-top: 0;
    min-height: 200vh;
  }
}

</style>
