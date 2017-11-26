<template>
  <div class="projects-container">
    <Modal v-if="showModal" @close="showModal = false">
    </Modal>

    <div class="tile is-ancestor">
      <div class="tile is-5 is-parent">
        <article class="tile is-child box border-solid">
          <button id="show-modal" @click="showModal = true">Director Portfolio</button>
          <figure class="image is-4by3">
            <img src="../../assets/images/rolfportfolio.jpg" alt="Project Movie Portfolio">
          </figure>
        </article>
      </div>
      <div class="tile is-5 is-parent">
        <article class="tile is-child box border-solid">
          <button id="show-modal" @click="showModal = true">Homerun</button>
          <figure class="image is-4by3">
            <img src="../../assets/images/homerun.jpg">
          </figure>
        </article>
      </div>
      <div class="tile is-5 is-parent">
        <article class="tile is-child box border-solid">
          <button id="show-modal" @click="showModal = true">DonkeyShot</button>
          <figure class="image is-4by3">
            <img src="../../assets/images/donkeyshot.jpg">
          </figure>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-5 is-parent">
        <article class="tile is-child box border-solid">
          <button id="show-modal" @click="showModal = true">My Portfolio</button>
          <figure class="image is-4by3">
            <img src="../../assets/images/rjhportfolio.jpg">
          </figure>
        </article>
      </div>
      <div class="tile is-5 is-parent">
        <article class="tile is-child box border-solid">
          <button id="show-modal" @click="showModal = true">Company Site(coming soon)</button>
        </article>
      </div>
      <div class="tile is-5 is-parent">
        <article class="tile is-child box border-solid">
          <button id="show-modal" @click="showModal = true">Future Project</button>
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

export default {
  name: 'SalesProjects',
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
  transition: 'moveIn'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.projects-container {
  margin-bottom: 2em;
}

#show-modal {
  margin-bottom: 1em;
  color: #4a4a4a;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  background: none;
  border: none;
}

#show-modal:hover {
  color: #3273dc;
}

/*#show-modal button {
  color: #3273dc;
  cursor: pointer;
  text-decoration: none;
}*/

.border-solid {
  border: #d0772b solid 2px;
  -webkit-box-shadow: 0px 7px 4px #777;
  -moz-box-shadow: 0px 7px 4px #777;
  box-shadow: 0px 7px 4px #777;
}

.projects-container {
}

.tile {
  margin: 1em;
}

.project-tile {
  margin: 1em;
}

</style>
