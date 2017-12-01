<template>
  <div class="dev-container">
    <b-loading :active.sync="isLoading" :canCancel="false">  </b-loading>
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

export default {
  name: 'MainPageDev',
  components: {
    SiteSwitch,
    AboutMeDev,
    AboutMeSales,
    DevProjects,
    DevWork
  },
  data () {
    return {
      component: 'AboutMeDev',
      isLoading: false
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
      }, 1.5 * 1000)
    }
  },
  transition: 'fadeOpacity'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#main-container-dev {
  background-color: black;
  // background-image: -moz-linear-gradient(90deg, #EBDFDF 5%, #062F4F);
  // background-image: -webkit-linear-gradient(90deg, #EBDFDF 5%, #062F4F);
  // background-image: -ms-linear-gradient(90deg, #EBDFDF 5%, #062F4F);
  // background-image: linear-gradient(90deg, #EBDFDF 5%, #062F4F);
}

.dev-container {
  height: 100vh;
}

.fadeOpacity-enter-active {
  transition: opacity 1s ease-out;
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

@media screen and (max-width:480px) {
  .dev-container {
    height: 300vh;
  }
}

</style>
