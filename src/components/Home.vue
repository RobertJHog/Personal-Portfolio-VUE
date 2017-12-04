<template>
  <div class="home-container">
    <b-loading :active.sync="isLoading" :canCancel="false"></b-loading>
      <NavBar></NavBar>
        <transition name="fadeOpacity">
          <component v-bind:is="activeContainer"></component>
        </transition>
      <VFooter></VFooter>
  </div>
</template>

<script>
import MainPageDev from '@/components/MainPageDev'
import MainPageSales from '@/components/MainPageSales'
import NavBar from '@/components/NavBar'
import VFooter from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    'MainPageDev': MainPageDev,
    'MainPageSales': MainPageSales,
    'NavBar': NavBar,
    'VFooter': VFooter
  },
  data () {
    return {
      isLoading: false
    }
  },
  created: function () {
    this.openLoading()
  },
  computed: {
    activeContainer () {
      return this.$store.state.activeEnvironment[0].sales ? 'MainPageSales' : 'MainPageDev'
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

<style lang="scss" scoped>

.fadeOpacity-enter-active {
   transition: opacity .5s ease-in;
 }

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}

.loading-overlay .loading-background {
  background: #0E0B16;
}

</style>
