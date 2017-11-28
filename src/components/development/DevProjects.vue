<template>
  <div class="projects-container">
    <Modal v-if="showModal" @close="showModal = false">
    </Modal>

    <div class="tile is-ancestor">
      <div v-for="project in projectsRowOne" class="tile is-5 is-parent">
        <article class="tile is-child box border-solid">
          <button id="show-modal" @click="showModal = true">{{project.title}}</button>
          <figure class="image is-4by3">
            <img :src="project.image" alt="Project Image">
          </figure>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div v-for="project in projectsRowTwo" class="tile is-5 is-parent">
        <article class="tile is-child box border-solid">
          <button id="show-modal" @click="showModal = true">{{project.title}}</button>
          <figure class="image is-4by3">
            <img :src="project.image" alt="Project Image">
          </figure>
        </article>
      </div>
    </div>
  </div>
</template>

<script>

import Homerun from '@/components/development/projects/homerun'
import Donkeyshot from '@/components/development/projects/donkeyshot'
import Rolfportfolio from '@/components/development/projects/rolfportfolio'
import Rjportfolio from '@/components/development/projects/rjportfolio'
import Modal from '@/components/Modal'
// import ProjectsJson from '@/assets/projects.json';

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
      showModal: false
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
  transition: 'moveIn'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

figure.image {
  border: 2px solid #697de3;
  border-radius: 20px;
  overflow: hidden;
}

.projects-container {
  margin-bottom: 2em;
  width: 75%;
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
  border: #d0772b solid 4px;
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

.project-tile {
  margin: 1em;
}

@media screen and (max-width:480px) {
  .projects-container {
    width: 100%;
  }
}

</style>
