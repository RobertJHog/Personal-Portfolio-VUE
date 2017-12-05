<template>
  <div class="dev-container">
    <div class="level" id="main-container-dev">
      <transition name="fadeOpacity">
        <component v-bind:is="activeComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import SiteSwitch from '@/components/SiteSwitch'
import AboutMeDev from '@/components/development/AboutMeDev'
import DevWork from '@/components/development/DevWork'
import DevProjects from '@/components/development/DevProjects'
import AboutMeSales from '@/components/sales/AboutMeSales'
import SalesWork from '@/components/sales/SalesWork'
import SalesProjects from '@/components/sales/SalesProjects'

export default {
  name: 'MainPageDev',
  components: {
    SiteSwitch,
    AboutMeDev,
    DevProjects,
    DevWork,
    AboutMeSales,
    SalesWork,
    SalesProjects
  },
  data () {
    return {
      component: 'AboutMeDev'
    }
  },
  mounted:
    function () {
      this.$store.dispatch('changeComponent', 'AboutMeDev')
    },
  computed: {
    activeComponent () {
      return this.$store.getters.currentComponent
    }
  },
  transition: 'fadeOpacity'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#main-container-dev {
  background-color: black;
  min-height: 100vh;
}

.dev-container {
  min-height: 100vh;
}

.fadeOpacity-enter-active {
   transition: opacity 1s ease-in;
 }

.fadeOpacity-enter, .fadeOpacity-leave-active {opacity: 0;}

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

@media screen and (max-width:1023px) {
  .dev-container {
    min-height: 220vh;
  }
}

@media screen and (max-width:480px) {
  .dev-container {
    min-height: 190vh;
  }
}

</style>
