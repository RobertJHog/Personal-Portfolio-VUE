<template>
  <div class="home-container">
    <b-loading :active.sync="isLoading" :canCancel="false"></b-loading>
    <NavBar></NavBar>
      <component v-bind:is="activeContainer"></component>
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
  }
}
</script>

<style lang="scss">

// Loadder
// .loading-overlay .loading-icon:after {
//   border: 2px solid #d0772b;
// }

// .loading-overlay .loading-background {
// }

body {
  background-color: #0E0B16;
}

#main-container-dev {
  background-image: -moz-linear-gradient(90deg, #EBDFDF 5%, #062F4F);
  background-image: -webkit-linear-gradient(90deg, #EBDFDF 5%, #062F4F);
  background-image: -ms-linear-gradient(90deg, #EBDFDF 5%, #062F4F);
  background-image: linear-gradient(90deg, #EBDFDF 5%, #062F4F);
}

#main-container-sales {
  background-image: -moz-linear-gradient(90deg, #EBDFDF 5%, #697de3);
  background-image: -webkit-linear-gradient(90deg, #EBDFDF 5%, #697de3);
  background-image: -ms-linear-gradient(90deg, #EBDFDF 5%, #697de3);
  background-image: linear-gradient(90deg, #EBDFDF 5%, #697de3);
  /*background-color: #5C5857;*/
}

.loading-overlay .loading-background {
  background: #0E0B16;
}

</style>
