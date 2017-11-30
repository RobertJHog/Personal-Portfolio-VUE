<template>
  <div class="projects-container">
    <Modal v-if="showModal" :project="selectedProject" @close="deselectProject">
    </Modal>
    <div class="flickity-container">
      <flickity ref="flickity" :options="flickityOptions">
        <div v-for="project in allProjects" class="carousel-cell">
            <button id="show-modal" @click="selectProject(project)">{{project.title}}</button>
            <figure class="image is-16by9">
              <img :src="project.image" alt="Project Image">
            </figure>
            <ul class="language-icons">
              <i v-for="logo in project.devlogos" :class="logo"></i>
            </ul>
        </div>
      </flickity>
      <div class="flick-buttons">
        <button @click="previous()">Custom Previous Button</button>
        <button @click="next()">Custom Next Button</button>
      </div>
    </div>

    <!-- <Modal v-if="showModal" :project="selectedProject" @close="deselectProject">
    </Modal>

    <div class="tile is-ancestor">
      <div v-for="project in projectsRowOne" class="tile is-5 is-parent">
        <article class="tile is-child box border-solid">
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

    <div class="tile is-ancestor">
      <div v-for="project in projectsRowTwo" class="tile is-5 is-parent">
        <article class="tile is-child box border-solid">
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

import Flickity from 'vue-flickity'
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
    Modal,
    Flickity
  },
  data () {
    return {
      component: '',
      showModal: false,
      selectedProject: undefined,
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true

        // any options from Flickity can be used
      }
    }
  },
  computed: {
    projectsRowOne () {
      return this.$store.getters.devProjects.slice(0, 3)
    },
    projectsRowTwo () {
      return this.$store.getters.devProjects.slice(3, 6)
    },
    allProjects () {
      return this.$store.getters.devProjects
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
    },
    next () {
      this.$refs.flickity.next()
    },
    previous () {
      this.$refs.flickity.previous()
    }
  },
  transition: 'moveIn'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.projects-container {
  margin-top: 3em;
}

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
  border-radius: 20px;
  overflow: hidden;
}

.projects-container {
  margin-bottom: 2em;
  width: 100%;
  /*min-height: 75%;*/
}

.carousel-cel {
  height: 50em;
  margin: 2em 5em;
  padding: 5em;
}

.carousel-cel.is-selected {
  /*width: 50vw;*/
}

.flick-buttons {
  margin: 4em 35em;
}

#show-modal {
  margin-bottom: 1em;
  color: #4a4a4a;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  background: none;
  border: none;
}

#show-modal:hover {
  color: #3273dc;
}

.border-solid {
  border: #d0772b solid 1px;
  /*border: #d0772b solid 4px;*/
  -webkit-box-shadow: 0px 7px 4px #777;
  -moz-box-shadow: 0px 7px 4px #777;
  box-shadow: 0px 7px 4px #777;
  border-radius: 40px;
}

.projects-container {
}

.tile {
  margin: 1em;
}

.tile.is-child {
  background-color: #ececec;
}

.project-tile {
  margin: 1em;
}

@media screen and (max-width:480px) {
  .projects-container {
    width: 100%;
  }
}

</style>
