<template>
  <div class="dev-container">
    <transition name="fadeOpacity">
      <div class="level" id="main-container-dev">
          <component v-bind:is="activeComponent"></component>
      </div>
    </transition>
  </div>
</template>

<script>
import SiteSwitch from '@/components/SiteSwitch'
import AboutMeDev from '@/components/development/AboutMeDev'
import DevWork from '@/components/development/DevWork'
import DevProjects from '@/components/development/DevProjects'

export default {
  name: 'MainPageDev',
  components: {
    SiteSwitch,
    AboutMeDev,
    DevProjects,
    DevWork
  },
  data () {
    return {
      component: 'AboutMeDev'
    }
  },
  created:
    function () {
      this.openLoading()
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
  methods: {
    openLoading () {
      const vm = this
      vm.isLoading = true
      setTimeout(() => {
        vm.isLoading = false
      }, 0.5 * 1000)
    }
  },
  transition: 'fadeOpacity'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.dev-container {
  margin: 0 2em;
}

.fadeOpacity-enter-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}

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

</style>
