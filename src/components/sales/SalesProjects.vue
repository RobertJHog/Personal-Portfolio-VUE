<template>
  <div class="projects-container">
    <p class="title"> Coming soon </p>
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
  height: 100vh;
}

.title {
  padding-top: 25vh;
  color: white;
  text-align: center;
}

.tile.is-child {
  background-color: #ececec;
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
  border: #d0772b solid 1px;
  -webkit-box-shadow: 0px 7px 4px #777;
  -moz-box-shadow: 0px 7px 4px #777;
  box-shadow: 0px 7px 4px #777;
  border-radius: 20px;
}

.projects-container {
}

.tile {
  margin: 1vw;
}

.project-tile {
  margin: 1vw;
}

@media screen and (max-width:480px) {
  .projects-container {
    min-height: 220vh;
  }
}

</style>
